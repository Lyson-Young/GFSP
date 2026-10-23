(() => {
  'use strict';
  const data = window.GSFP_CONTENT || {};
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const safeLink = url => {
    try { const parsed = new URL(url, document.baseURI); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : null; } catch { return null; }
  };
  const portrait = member => {
    const img = el('img', 'portrait');
    img.src = safeLink(member.photo) || './assets/gsfp-logo.png';
    img.alt = `${member.name}的照片`; img.loading = 'lazy'; img.decoding = 'async'; img.width = 300; img.height = 400;
    return img;
  };
  document.querySelectorAll('#copyright-year').forEach(node => { node.textContent = new Date().getFullYear(); });
  const faculty = document.querySelector('#faculty-content');
  if (faculty) faculty.replaceChildren(...(data.faculty || []).map(member => {
    const article = el('article', 'faculty-card');
    const imageWrap = el('div', 'faculty-photo'); imageWrap.append(portrait(member));
    const copy = el('div', 'faculty-copy');
    copy.append(el('h4', '', member.name), el('p', 'member-role', member.role), el('p', 'member-institution', member.institution), el('p', 'faculty-description', member.description));
    const url = safeLink(member.url);
    if (url) { const a = el('a', 'faculty-link', '教师个人主页 ↗'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', `${member.name}的教师个人主页（新窗口打开）`); copy.append(a); }
    article.append(imageWrap, copy); return article;
  }));
  const studentCard = (member, graduated = false) => {
    const article = el('article', 'student-card'); const imageWrap = el('div', 'student-photo'); imageWrap.append(portrait(member));
    const identity = el('h4', 'student-identity');
    identity.append(document.createTextNode(member.name), el('span', 'student-degree', `（${member.role}）`));
    const focus = el('p', 'student-focus');
    focus.append(el('strong', 'student-focus-label', '研究方向：'), document.createTextNode(member.focus));
    article.append(imageWrap, identity, focus);
    if (graduated && member.destination) {
      const destination = el('div', 'alumni-destination');
      destination.append(el('span', '', '毕业去向'), el('p', '', member.destination));
      article.append(destination);
    }
    return article;
  };
  const students = document.querySelector('#students-content');
  if (students) students.replaceChildren(...(data.students || []).map(member => studentCard(member)));
  const alumni = document.querySelector('#alumni-content');
  if (alumni) alumni.replaceChildren(...(data.alumni || []).map(member => studentCard(member, true)));
  const studentTabs = [...document.querySelectorAll('.student-tab')];
  if (studentTabs.length) {
    document.querySelector('#current-students-count').textContent = (data.students || []).length;
    document.querySelector('#alumni-count').textContent = (data.alumni || []).length;
    const activate = (selected, updateLocation = false) => {
      studentTabs.forEach(tab => {
        const active = tab === selected;
        tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
      });
      if (updateLocation) history.replaceState(null, '', `#${selected.getAttribute('aria-controls')}`);
    };
    studentTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab, true));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = studentTabs[(index + 1) % studentTabs.length];
        else if (event.key === 'ArrowLeft') next = studentTabs[(index - 1 + studentTabs.length) % studentTabs.length];
        else if (event.key === 'Home') next = studentTabs[0];
        else if (event.key === 'End') next = studentTabs[studentTabs.length - 1];
        if (next) { event.preventDefault(); activate(next, true); next.focus(); }
      });
    });
    const selectFromHash = () => {
      const matched = studentTabs.find(tab => `#${tab.getAttribute('aria-controls')}` === location.hash);
      if (matched) activate(matched);
    };
    selectFromHash(); window.addEventListener('hashchange', selectFromHash);
    if (location.hash === '#alumni' || location.hash === '#current-students') document.querySelector('.students-heading').scrollIntoView({block: 'start'});
  }
  const announcementContainer = document.querySelector('#announcements-content');
  const news = Array.isArray(data.news) ? [...data.news].sort((a, b) => b.date.localeCompare(a.date)) : [];
  const feature = document.querySelector('#news-feature');
  if (feature) {
    const story = news.find(item => item.photo && item.href);
    if (story) {
      const link = el('a', 'news-feature-link'); link.href = safeLink(story.href); link.setAttribute('aria-label', `${story.title}，${story.date}发布`);
      const figure = el('figure', 'news-feature-figure');
      const img = el('img'); img.src = safeLink(story.photo); img.alt = story.photoAlt;
      img.width = story.photoWidth; img.height = story.photoHeight; img.loading = 'lazy'; img.decoding = 'async';
      const caption = el('figcaption'); caption.append(el('h3', '', story.title));
      const date = el('time', '', story.date); date.dateTime = story.date;
      caption.append(date); figure.append(img, caption); link.append(figure); feature.replaceChildren(link);
    } else { feature.hidden = true; feature.parentElement.classList.add('news-layout-list-only'); }
  }
  const dialog = document.querySelector('#detail-dialog');
  if (dialog) {
    document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
  }
  const allUpdates = [...news, ...(Array.isArray(data.announcements) ? data.announcements : [])];
  if (announcementContainer && allUpdates.length) {
    const announcements = allUpdates.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    announcementContainer.replaceChildren(...announcements.map(item => {
      const detailUrl = item.href && safeLink(item.href);
      const button = el(detailUrl ? 'a' : 'button', 'announcement-row');
      if (detailUrl) button.href = detailUrl;
      else { button.type = 'button'; button.setAttribute('aria-haspopup', 'dialog'); }
      const dateBlock = el('div', 'announcement-date');
      const time = el('time', '', item.date || ''); if (/^\d{4}-\d{2}(?:-\d{2})?$/.test(item.date || '')) time.dateTime = item.date;
      dateBlock.append(time); if (item.dateKind) time.title = item.dateKind;
      const copy = el('div', 'announcement-copy');
      const title = el('h3');
      title.append(el('span', 'announcement-category', `[${item.category || (item.doi ? '期刊论文' : '快讯')}] `));
      if (item.researchTitle) {
        title.append(el('span', 'announcement-journal', item.journal), document.createTextNode(`-${item.researchTitle}`));
      } else title.append(document.createTextNode(item.title));
      title.title = item.title; copy.append(title);
      button.append(copy, dateBlock);
      if (!detailUrl) button.addEventListener('click', () => {
        document.querySelector('#detail-label').textContent = item.date || '团队快讯'; document.querySelector('#detail-title').textContent = item.title;
        const body = document.querySelector('#detail-body'); body.replaceChildren(document.createTextNode(item.body || item.summary || ''));
        const url = item.url && safeLink(item.url); if (url) { const a = el('a', '', '查看原文 ↗'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; body.append(el('p'), a); }
        dialog.showModal();
      }); return button;
    }));
  }
})();
