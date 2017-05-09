const blockTags = [
  <blockquote>,
  <dd>,
  <div>,
  <dl>,
  <dt>,
  <figcaption>,
  <figure>,
  <hr>,
  <li>,
  <main>,
  <ol>,
  <p>,
  <pre>,
  <ul>,
];

const inlineTags = [
  <a>,
  <abbr>,
  <b>,
  <bdi>,
  <bdo>,
  <br>,
  <cite>,
  <code>,
  <data>,
  <dfn>,
  <em>,
  <i>,
  <kbd>,
  <mark>,
  <q>,
  <rp>,
  <rt>,
  <rtc>,
  <ruby>,
  <s>,
  <samp>,
  <small>,
  <span>,
  <strong>,
  <sub>,
  <sup>,
  <time>,
  <u>,
  <var>,
  <wbr>,
];

const mediaTags = [
  <area>,
  <audio>,
  <img>,
  <map>,
  <track>,
  <video>
];

const formTags = [
  <button>,
  <datalist>,
  <fieldset>,
  <form>,
  <input>,
  <label>,
  <legend>,
  <meter>,
  <optgroup>,
  <option>,
  <output>,
  <progress>,
  <select>,
  <textarea>
];

export default {
  blockTags,
  inlineTags,
  mediaTags,
  formTags,
};
