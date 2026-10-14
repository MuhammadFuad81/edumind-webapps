/* Edumind Academy — Kendali & Perbaikan Mutu Sekolah V1.0
   Browser only; never transmits school records to a server.
   Deployment: WSP HTML loader + public JavaScript on GitHub/jsDelivr.
   Copyright (c) Edumind Academy. All rights reserved.
*/
(function () {
  'use strict';
  const ROOT_ID = 'edumind-pdca-root';
  const root = document.getElementById(ROOT_ID);
  if (!root || root.dataset.epdcaMounted === '1') return;
  root.dataset.epdcaMounted = '1';
  const APP_VERSION = '1.0.1';
  const AUTH_USERNAME = 'edumind';
  const AUTH_SESSION_KEY = 'edumind_pdca_v1_ui_session';
  const AUTH_SALT = 'edumind-pdca-ui-access-v1-20261014';
  const AUTH_DIGEST = 'fbf4ca121c8e5785c1093d73360d529942d7f49e994c2f78030fc80ec56bf4dc';
  const BRAND_LOGO_URL = 'https://growva.biz.id/gambarbebas/20260728-075640_Logo%20Edumind%20Academy%20-%20Terbaru2026%20-%20untuk%20webbook.png';
  const DB_NAME = 'edumind_pdca_mutu_v1';
  const LOCAL_KEY = 'edumind_pdca_mutu_v1_data';
  const LOCAL_OVERRIDE_KEY = 'edumind_pdca_mutu_v1_local_fallback';
  const STYLE_TEXT = "#edumind-pdca-root{--ep-deep:#0e302c;--ep-emerald:#136c5b;--ep-accent:#d4aa50;--ep-muted:#667a76;--ep-line:#e1e9e5;--ep-bg:#f5f8f6;--ep-ink:#16332e;--ep-card:#fff;--ep-pale:#e9f3ec;font-family:Inter,ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif;color:var(--ep-ink);background:var(--ep-bg);min-height:88vh;line-height:1.52;font-size:14px;letter-spacing:0;-webkit-font-smoothing:antialiased;isolation:isolate}#edumind-pdca-root *{box-sizing:border-box}#edumind-pdca-root button,#edumind-pdca-root input,#edumind-pdca-root textarea,#edumind-pdca-root select{font:inherit}#edumind-pdca-root button{cursor:pointer}#edumind-pdca-root button:disabled{opacity:.5;cursor:not-allowed}#edumind-pdca-root .ep-app{display:grid;grid-template-columns:228px minmax(0,1fr);max-width:1440px;margin:auto;min-height:88vh}#edumind-pdca-root .ep-aside{background:var(--ep-deep);color:white;padding:24px 16px;display:flex;flex-direction:column;gap:22px}#edumind-pdca-root .ep-brand{display:flex;gap:11px;align-items:center;padding:4px 5px 16px;border-bottom:1px solid #ffffff30}#edumind-pdca-root .ep-brandimg{display:block;width:108px;max-width:100%;height:auto;border-radius:10px;background:#fff;padding:6px;border:1px solid #ffffff22;flex-shrink:0}#edumind-pdca-root .ep-brand b{display:block;font-size:15px;line-height:1.2}#edumind-pdca-root .ep-brand span{font-size:11px;color:#bed4cd}#edumind-pdca-root .ep-nav{display:grid;gap:5px}#edumind-pdca-root .ep-navbutton{display:flex;align-items:center;gap:10px;background:transparent;border:1px solid transparent;border-radius:9px;color:#e0ece8;text-align:left;padding:11px 10px;width:100%;font-weight:600;font-size:13px}#edumind-pdca-root .ep-navbutton:hover,#edumind-pdca-root .ep-navbutton[aria-current=page]{background:#266158;color:white;border-color:#ffffff15}#edumind-pdca-root .ep-navicon{width:22px;text-align:center;font-size:17px;font-weight:400}#edumind-pdca-root .ep-sidefoot{margin-top:auto;color:#b9d2c9;font-size:11px;border-top:1px solid #ffffff22;padding-top:14px;line-height:1.6}#edumind-pdca-root .ep-main{min-width:0;padding:23px clamp(16px,3.2vw,43px) 48px}#edumind-pdca-root .ep-top{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;border-bottom:1px solid var(--ep-line);padding-bottom:17px;margin-bottom:19px}#edumind-pdca-root .ep-top h1{font-size:19px;line-height:1.25;margin:0;color:#0e3831;font-weight:800;letter-spacing:-.3px}#edumind-pdca-root .ep-top p{font-size:12px;color:var(--ep-muted);margin:5px 0 0}#edumind-pdca-root .ep-top-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}#edumind-pdca-root .ep-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:9px;padding:10px 15px;font-weight:650;border:1px solid var(--ep-line);background:white;color:var(--ep-ink);min-height:39px;text-align:center;text-decoration:none;font-size:13px;transition:background .16s,transform .16s}#edumind-pdca-root .ep-btn:hover{background:#f2f6f3}#edumind-pdca-root .ep-btn:active{transform:translateY(1px)}#edumind-pdca-root .ep-btn-primary{background:#116553;color:white;border-color:#116553}#edumind-pdca-root .ep-btn-primary:hover{background:#0d5142}#edumind-pdca-root .ep-btn-danger{color:#9f2424;border-color:#f3cdcd}#edumind-pdca-root .ep-btn-quiet{background:transparent}#edumind-pdca-root .ep-btn-small{padding:7px 10px;min-height:32px;font-size:12px}#edumind-pdca-root .ep-stack{display:grid;gap:15px}#edumind-pdca-root .ep-card{background:var(--ep-card);border:1px solid var(--ep-line);border-radius:13px;padding:20px;box-shadow:0 2px 12px rgba(13,49,38,.025)}#edumind-pdca-root .ep-welcome{background:linear-gradient(110deg,#e6f1e9,#f4f9ee);border-color:#d6e6dd;padding:21px}#edumind-pdca-root .ep-welcome h2{font-size:20px;line-height:1.25;margin:6px 0;color:#12392f}#edumind-pdca-root .ep-welcome p{margin:0 0 15px;color:#425b52;max-width:670px}#edumind-pdca-root .ep-kicker{font-size:10px;font-weight:800;color:#28745d;letter-spacing:1.2px;text-transform:uppercase}#edumind-pdca-root .ep-row{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}#edumind-pdca-root .ep-row-start{display:flex;align-items:center;gap:10px;flex-wrap:wrap}#edumind-pdca-root h2.ep-title{font-size:21px;line-height:1.2;margin:0 0 6px;font-weight:800;color:#10372e;letter-spacing:-.35px}#edumind-pdca-root h3{font-size:16px;line-height:1.3;color:#12362e;margin:0 0 8px}#edumind-pdca-root p{margin:0 0 10px}#edumind-pdca-root .ep-muted{color:var(--ep-muted)}#edumind-pdca-root .ep-mini{font-size:12px}#edumind-pdca-root .ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}#edumind-pdca-root .ep-stat{background:white;border:1px solid var(--ep-line);border-radius:12px;padding:17px}#edumind-pdca-root .ep-statlabel{font-size:12px;color:var(--ep-muted)}#edumind-pdca-root .ep-statnum{font-size:30px;font-weight:800;letter-spacing:-1px;margin-top:2px;color:#153e34;line-height:1.25}#edumind-pdca-root .ep-stat:nth-child(1){border-top:3px solid #4a957a}#edumind-pdca-root .ep-stat:nth-child(2){border-top:3px solid #d49a47}#edumind-pdca-root .ep-stat:nth-child(3){border-top:3px solid #477cbd}#edumind-pdca-root .ep-list{display:grid;gap:9px;margin-top:12px}#edumind-pdca-root .ep-case{display:flex;align-items:center;justify-content:space-between;gap:13px;border:1px solid var(--ep-line);border-radius:9px;padding:13px 14px;background:#fff}#edumind-pdca-root .ep-case:hover{border-color:#9cc7b8;background:#fbfdfb}#edumind-pdca-root .ep-caseinfo{min-width:0}#edumind-pdca-root .ep-caseinfo b{display:block;font-size:14px;overflow-wrap:anywhere}#edumind-pdca-root .ep-caseinfo small{font-size:11px;color:var(--ep-muted)}#edumind-pdca-root .ep-case-side{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}#edumind-pdca-root .ep-badge{display:inline-block;font-size:11px;font-weight:700;border-radius:999px;padding:4px 9px;background:#eaf2ee;color:#28624d;white-space:nowrap}#edumind-pdca-root .ep-badge.ep-success{background:#def4e6;color:#17643b}#edumind-pdca-root .ep-badge.ep-warning{background:#fff0d9;color:#95630d}#edumind-pdca-root .ep-badge.ep-danger{background:#feeaea;color:#a22b2b}#edumind-pdca-root .ep-badge.ep-neutral{background:#edf0f2;color:#5f6e74}#edumind-pdca-root .ep-note{background:#eaf3ed;border:1px solid #d2e3d8;border-radius:9px;color:#365e4f;font-size:12px;padding:11px 13px}#edumind-pdca-root .ep-note.ep-amber{background:#fff8e9;border-color:#f0dbb0;color:#875d23}#edumind-pdca-root .ep-note.ep-red{background:#fff0f0;border-color:#f3cece;color:#862626}#edumind-pdca-root .ep-empty{text-align:center;padding:35px 16px;color:var(--ep-muted)}#edumind-pdca-root .ep-empty h3{margin:8px 0}#edumind-pdca-root .ep-empty .ep-illustration{font-size:42px;line-height:1.1;color:#619783}#edumind-pdca-root .ep-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:17px 0}#edumind-pdca-root .ep-step{border:1px solid #dce7e0;border-radius:9px;background:#fff;padding:11px 7px;text-align:center;font-size:12px;color:#59756b;font-weight:800;display:flex;justify-content:center;align-items:center;gap:5px}#edumind-pdca-root .ep-step.ep-active{background:#126653;border-color:#126653;color:#fff}#edumind-pdca-root .ep-step.ep-done{background:#e8f4ed;color:#176047;border-color:#bedbcb}#edumind-pdca-root .ep-step:disabled{opacity:.35}#edumind-pdca-root .ep-form{display:grid;gap:17px}#edumind-pdca-root .ep-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}#edumind-pdca-root .ep-field{display:grid;gap:6px;min-width:0}#edumind-pdca-root .ep-field label{font-weight:700;font-size:12px;color:#254d40}#edumind-pdca-root .ep-field label .ep-req{color:#bf4235}#edumind-pdca-root .ep-field input,#edumind-pdca-root .ep-field select,#edumind-pdca-root .ep-field textarea{width:100%;border:1px solid #cfdcd4;background:#fff;color:#19362d;border-radius:8px;outline:none;padding:10px 11px;min-height:41px;font-size:14px;line-height:1.4}#edumind-pdca-root .ep-field textarea{resize:vertical;min-height:78px}#edumind-pdca-root .ep-field input:focus,#edumind-pdca-root .ep-field select:focus,#edumind-pdca-root .ep-field textarea:focus{border-color:#1e9070;box-shadow:0 0 0 3px #1e907024}#edumind-pdca-root .ep-field :disabled{background:#f4f6f5;color:#52645c}#edumind-pdca-root .ep-field .ep-hint{font-size:11px;color:#71817b}#edumind-pdca-root .ep-divider{height:1px;background:var(--ep-line);margin:2px 0}#edumind-pdca-root .ep-form-footer{display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap;border-top:1px solid var(--ep-line);padding-top:15px}#edumind-pdca-root .ep-chipline{display:flex;gap:7px;flex-wrap:wrap}#edumind-pdca-root .ep-detail{background:#f5f9f6;border:1px solid #e0ebe4;border-radius:10px;padding:12px}#edumind-pdca-root .ep-detail dt{font-size:11px;color:var(--ep-muted)}#edumind-pdca-root .ep-detail dd{font-weight:650;margin:3px 0 13px;overflow-wrap:anywhere}#edumind-pdca-root .ep-detail dd:last-child{margin-bottom:0}#edumind-pdca-root .ep-linkbtn{border:0;color:#116853;text-decoration:underline;background:none;padding:2px 0;font-size:12px}#edumind-pdca-root .ep-numeric-preview{border:1px solid #d7e9d9;border-radius:9px;padding:12px;background:#f0f8f0}#edumind-pdca-root .ep-numeric-preview b{display:block;font-size:15px;margin:3px 0}#edumind-pdca-root .ep-helpgrid{display:grid;gap:7px;padding:0;margin:0;list-style:none}#edumind-pdca-root .ep-helpgrid li{padding:7px 9px;border:1px solid #e2e9e4;border-radius:7px;font-size:12px}#edumind-pdca-root .ep-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}#edumind-pdca-root .ep-search{width:min(100%,350px);border:1px solid #cfded4;border-radius:9px;padding:10px 12px;outline:none;background:#fff}#edumind-pdca-root .ep-modalback{position:fixed;inset:0;background:#0d2b2a91;display:flex;align-items:center;justify-content:center;z-index:999999;padding:14px}#edumind-pdca-root .ep-modal{width:min(100%,450px);background:#fff;padding:22px;border-radius:14px;box-shadow:0 20px 60px #0003;display:grid;gap:12px}#edumind-pdca-root .ep-modal h3{margin:0}#edumind-pdca-root .ep-modal .ep-field{margin-top:5px}#edumind-pdca-root .ep-toast{position:fixed;bottom:22px;right:20px;max-width:min(360px,calc(100vw - 36px));padding:13px 16px;border-radius:10px;background:#174f42;color:#fff;font-size:13px;box-shadow:0 8px 28px #10372c30;z-index:9999999}#edumind-pdca-root .ep-subhead{font-size:11px;font-weight:800;color:#39745c;letter-spacing:.8px;text-transform:uppercase;margin:0 0 6px}#edumind-pdca-root .ep-sections{display:grid;gap:12px}#edumind-pdca-root .ep-kv{display:grid;grid-template-columns:140px 1fr;gap:7px;font-size:12px;padding:8px 0;border-bottom:1px solid var(--ep-line)}#edumind-pdca-root .ep-kv span{color:var(--ep-muted)}#edumind-pdca-root .ep-kv strong{font-weight:600;overflow-wrap:anywhere}#edumind-pdca-root .ep-hr{border:0;border-top:1px solid var(--ep-line);margin:14px 0}#edumind-pdca-root .ep-sidechip{color:#b9d2c9;font-size:11px}#edumind-pdca-root button:focus-visible,#edumind-pdca-root a:focus-visible{outline:3px solid #eebc5e;outline-offset:2px}#edumind-pdca-root .ep-only-sr{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(0,0,0,0)}\n@media(max-width:830px){#edumind-pdca-root .ep-app{grid-template-columns:1fr}#edumind-pdca-root .ep-aside{padding:12px 14px;gap:10px;position:static}#edumind-pdca-root .ep-brand{padding:2px 0 10px}#edumind-pdca-root .ep-brandimg{width:92px;padding:5px}#edumind-pdca-root .ep-nav{display:flex;gap:5px;overflow-x:auto;scrollbar-width:thin}#edumind-pdca-root .ep-navbutton{width:auto;white-space:nowrap;padding:9px 11px;flex-shrink:0}#edumind-pdca-root .ep-navicon{width:auto}#edumind-pdca-root .ep-sidefoot{display:none}#edumind-pdca-root .ep-main{padding:18px 14px 32px}#edumind-pdca-root .ep-top{align-items:flex-start}#edumind-pdca-root .ep-top h1{font-size:17px}}@media(max-width:560px){#edumind-pdca-root .ep-top{flex-direction:column;align-items:stretch}#edumind-pdca-root .ep-top-actions{justify-content:flex-start}#edumind-pdca-root .ep-grid3{grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}#edumind-pdca-root .ep-stat{padding:10px 8px}#edumind-pdca-root .ep-statlabel{font-size:10px}#edumind-pdca-root .ep-statnum{font-size:25px}#edumind-pdca-root .ep-card{padding:15px}#edumind-pdca-root .ep-case{align-items:flex-start;flex-direction:column}#edumind-pdca-root .ep-case-side{width:100%;justify-content:space-between}#edumind-pdca-root .ep-steps{gap:4px}#edumind-pdca-root .ep-step{padding:9px 2px;font-size:11px}#edumind-pdca-root .ep-form-grid{grid-template-columns:1fr}#edumind-pdca-root h2.ep-title{font-size:19px}#edumind-pdca-root .ep-kv{grid-template-columns:1fr;gap:1px}#edumind-pdca-root .ep-form-footer{align-items:stretch}#edumind-pdca-root .ep-form-footer .ep-btn{width:100%}}\n/* Prevent wide navigation from expanding mobile grid tracks. */\n#edumind-pdca-root .ep-aside,#edumind-pdca-root .ep-nav{min-width:0;max-width:100%}\n#edumind-pdca-root .ep-app{width:100%}\n";
  const AUTH_STYLE = `
/* Penataan logo: tidak mengulang nama yang sudah tercetak pada gambar logo. */
#edumind-pdca-root .ep-brand { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:9px; text-align:center; padding:5px 8px 21px; }
#edumind-pdca-root .ep-brandimg { display:block; width:154px; max-width:100%; height:auto; padding:8px; background:#ffffff; border:1px solid #ffffff33; border-radius:12px; box-shadow:0 4px 14px #0002; flex-shrink:0; }
#edumind-pdca-root .ep-brand-label { color:#d6e6df; text-transform:uppercase; letter-spacing:1.2px; font-weight:700; font-size:10px; line-height:1.6; }
/* Halaman masuk sederhana, tidak mengubah isi/struktur data PDCA. */
#edumind-pdca-root .ep-login-screen{min-height:100vh;margin:-12px; padding:34px 16px; display:flex; align-items:center; justify-content:center; background:radial-gradient(ellipse at 60% 25%,#164f47 0%,#102b34 47%,#111c31 100%);}
#edumind-pdca-root .ep-login-card{background:#fff; width:min(100%,395px); padding:28px 27px 22px; border-radius:19px; box-shadow:0 22px 66px #0003; color:#133c35;}
#edumind-pdca-root .ep-login-brand{margin:0 auto 19px; display:flex; justify-content:center; align-items:center; background:#0d403b; border-radius:12px; width:210px; max-width:100%; padding:9px 12px;}
#edumind-pdca-root .ep-login-brand img{width:100%;height:auto;display:block;}
#edumind-pdca-root .ep-login-kicker{text-align:center;color:#986514;letter-spacing:1.45px;font-size:11px;font-weight:750;margin-bottom:8px;}
#edumind-pdca-root .ep-login-title{margin:0!important; text-align:center; color:#10372d;font-size:22px!important; line-height:1.3;letter-spacing:-.45px;}
#edumind-pdca-root .ep-login-subtitle{text-align:center;margin:10px 0 25px!important;color:#627970;font-size:12px;}
#edumind-pdca-root .ep-auth-form{display:grid;gap:15px;}
#edumind-pdca-root .ep-auth-field{display:grid;gap:7px;}
#edumind-pdca-root .ep-auth-field>label{font-size:12px;font-weight:750;color:#224b43;}
#edumind-pdca-root .ep-auth-input{width:100%; min-height:45px; padding:11px 12px; border:1px solid #c3d8ce; border-radius:9px; background:#f8faf9; outline:none; color:#163b32; font-size:14px;}
#edumind-pdca-root .ep-auth-input:focus{border-color:#168469;box-shadow:0 0 0 3px #16846923;}
#edumind-pdca-root .ep-auth-passwrap{display:flex;position:relative;align-items:center;}
#edumind-pdca-root .ep-auth-passwrap .ep-auth-input{padding-right:69px;}
#edumind-pdca-root .ep-auth-reveal{position:absolute;right:7px;top:6px;bottom:6px;min-width:55px;background:transparent;border:0;border-radius:7px;color:#27554a;font-size:12px;font-weight:650;padding:2px 5px;cursor:pointer;}
#edumind-pdca-root .ep-auth-reveal:hover{background:#eaf3ed;}
#edumind-pdca-root .ep-auth-error{background:#fff1f1;border:1px solid #f5cece;border-radius:8px;color:#a32626;padding:10px 12px;font-size:12px;}
#edumind-pdca-root .ep-auth-note{background:#fff7e8;border:1px solid #ead2a1;color:#775728;border-radius:9px;padding:11px 12px;font-size:11px;line-height:1.65;}
#edumind-pdca-root .ep-auth-submit{width:100%;border:1px solid #176450;background:#176450;color:white;padding:12px 15px;border-radius:9px;font-weight:750;font-size:14px;min-height:45px;cursor:pointer;}
#edumind-pdca-root .ep-auth-submit:hover{background:#0c4d3e;}
#edumind-pdca-root .ep-auth-submit:disabled{opacity:.6;cursor:wait;}
#edumind-pdca-root .ep-login-footer{text-align:center;color:#70817d;font-size:11px;border-top:1px solid #e6ece8;margin-top:19px;padding-top:17px;line-height:1.7;}
#edumind-pdca-root .ep-btn-logout {border-color:#cfddd6; color:#24584c;}
@media(max-width:830px){#edumind-pdca-root .ep-brand{flex-direction:row;gap:12px;justify-content:center;padding:4px 8px 12px;}#edumind-pdca-root .ep-brandimg{width:128px;padding:6px;}#edumind-pdca-root .ep-brand-label{text-align:left;}}
@media(max-width:420px){#edumind-pdca-root .ep-login-card{padding:23px 20px 19px;}#edumind-pdca-root .ep-login-title{font-size:20px!important;}#edumind-pdca-root .ep-login-screen{padding:22px 12px;}#edumind-pdca-root .ep-brandimg{width:115px;}}
`;
  const style = document.createElement('style');
  style.id = 'edumind-pdca-v1-styles';
  style.textContent = STYLE_TEXT + AUTH_STYLE;
  document.head.appendChild(style);

  const HTML = value => String(value == null ? '' : value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clone = value => JSON.parse(JSON.stringify(value));
  const now = () => new Date().toISOString();
  const today = () => { const d = new Date(); return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-'); };
  const datePlus = days => { const d = new Date(); d.setDate(d.getDate()+days); return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-'); };
  const prettyDate = date => date ? new Date(date.length === 10 ? date+'T12:00:00' : date).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}) : '—';
  const uid = () => (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') ? crypto.randomUUID() : ('id-'+Date.now()+'-'+Math.random().toString(36).slice(2));
  const getNumber = str => { const value = String(str ?? '').trim(); if (!value) return null; const n = Number(value.replace(',','.')); return Number.isFinite(n) ? n : null; };
  const numberText = val => { const n = getNumber(val); return n === null ? '—' : n.toLocaleString('id-ID',{maximumFractionDigits:4}); };
  const safeYear = date => /^\d{4}-\d{2}-\d{2}$/.test(date||'');
  const STORAGE = {mode:'unknown', db:null};
  let realState = blankState();
  let demoState = null;
  let demoMode = false;
  let page = 'home';
  let selectedId = '';
  let inspectStep = '';
  let modalOpen = false;
  let searchText = '';
  let pendingSave = null;
  let saveSequence = Promise.resolve();
  let lastSaveSuccess = true;
  let toastTimer = null;

  // Akses tampilan saja. Ini bukan autentikasi server dan tidak mengamankan
  // data lokal dari orang yang memiliki akses ke perangkat/browser.
  let authorized = false;
  let authBusy = false;
  try { authorized = sessionStorage.getItem(AUTH_SESSION_KEY) === '1'; } catch (_) {}

  async function verifyLogin(username,password){
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      throw new Error('Halaman harus dibuka melalui HTTPS agar verifikasi login berfungsi.');
    }
    const source = new TextEncoder().encode(AUTH_SALT + ':' + username.trim() + ':' + password);
    const hash = await crypto.subtle.digest('SHA-256',source);
    const hex = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2,'0')).join('');
    return username.trim() === AUTH_USERNAME && hex === AUTH_DIGEST;
  }
  function renderLogin(){
    root.innerHTML = `<div class="ep-login-screen"><div class="ep-login-card">
      <div class="ep-login-brand"><img src="${BRAND_LOGO_URL}" alt="Logo Edumind Academy"></div>
      <div class="ep-login-kicker">APLIKASI WEB</div>
      <h1 class="ep-login-title">Kendali &amp; Perbaikan Mutu Sekolah</h1>
      <p class="ep-login-subtitle">Berbasis Siklus PDCA–TQM</p>
      <form id="ep-auth-form" class="ep-auth-form" autocomplete="off">
        <div class="ep-auth-field"><label for="ep-auth-username">Username</label><input class="ep-auth-input" id="ep-auth-username" type="text" placeholder="Masukkan username" autocomplete="username" autocapitalize="none" spellcheck="false" required maxlength="60"></div>
        <div class="ep-auth-field"><label for="ep-auth-password">Password</label><div class="ep-auth-passwrap"><input class="ep-auth-input" id="ep-auth-password" type="password" placeholder="Masukkan password" autocomplete="current-password" required><button type="button" class="ep-auth-reveal" data-action="toggle-auth-password" aria-controls="ep-auth-password" aria-pressed="false">Lihat</button></div></div>
        <div class="ep-auth-error" id="ep-auth-error" role="alert" hidden></div>
        <div class="ep-auth-note">Data yang sudah disimpan tetap berada di perangkat ini, termasuk setelah Anda memilih Keluar.</div>
        <button class="ep-auth-submit" id="ep-auth-submit" type="submit">Masuk Sistem &nbsp; →</button>
      </form>
      <div class="ep-login-footer">Gunakan perangkat pribadi dan cadangkan data secara berkala.<br>Versi ${APP_VERSION}</div>
    </div></div>`;
  }
  function showAuthError(message){const el=root.querySelector('#ep-auth-error');if(el){el.hidden=false;el.textContent=message;}}
  async function handleLogin(event){
    event.preventDefault();
    if(authorized || authBusy) return;
    const username=root.querySelector('#ep-auth-username')?.value ?? '';
    const password=root.querySelector('#ep-auth-password')?.value ?? '';
    if(!username.trim() || !password){showAuthError('Masukkan username dan password.');return;}
    authBusy=true;
    const button=root.querySelector('#ep-auth-submit');if(button){button.disabled=true;button.textContent='Memeriksa…';}
    try {
      if(await verifyLogin(username,password)){
        authorized=true;
        try{sessionStorage.setItem(AUTH_SESSION_KEY,'1');}catch(_){}
        page='home';render();return;
      }
      showAuthError('Username atau password tidak sesuai.');
      const el=root.querySelector('#ep-auth-password');if(el){el.value='';el.focus();}
    } catch(err){showAuthError(err.message || 'Tidak dapat memeriksa login.');}
    finally{authBusy=false;if(button?.isConnected){button.disabled=false;button.textContent='Masuk Sistem   →';}}
  }
  async function signOut(){
    if(!demoMode){
      await immediateSave();
      if(!lastSaveSuccess && !window.confirm('Data terbaru mungkin belum tersimpan. Keluar tetap dilakukan?'))return;
    }
    try{sessionStorage.removeItem(AUTH_SESSION_KEY);}catch(_){}
    authorized=false;demoMode=false;demoState=null;page='home';selectedId='';inspectStep='';modalOpen=false;
    renderLogin();
  }


  function blankState(){return {schemaVersion:1,schoolName:'',cases:[]};}
  const state = () => demoMode ? demoState : realState;
  function newCycle(previous=null){
    const plan = {problem:'',action:'',pic:'',dueDate:'',method:'numeric',metric:'',unit:'%',direction:'up',baseline:'',target:'',criterion:''};
    if(previous){
      const p=previous.plan;
      Object.assign(plan,{problem:p.problem,pic:p.pic,method:p.method,metric:p.metric,unit:p.unit,direction:p.direction,target:p.target,criterion:p.criterion,baseline:p.method==='numeric'?String(previous.check.actual):''});
    }
    return {id:uid(),startedAt:now(),stage:'plan',plan,do:{status:'not_started',notes:'',recordedAt:''},check:{actual:'',criteriaStatus:'',evidence:'',checkedAt:'',passed:null},act:{decision:'',notes:'',decidedAt:''}};
  }
  function currentCycle(record){return record.cycles[record.cycles.length-1];}
  function currentRecord(){return state().cases.find(item=>item.id===selectedId) || null;}
  function recordStatus(record){
    const c = currentCycle(record);
    if(c.stage==='closed') return c.act.decision==='standardize'?'Berhasil':'Ditutup';
    return ({plan:'PLAN',do:'DO',check:'CHECK',act:'ACT'})[c.stage]||'PLAN';
  }
  function isLate(record){const c=currentCycle(record);return c.stage!=='closed' && c.stage!=='plan' && safeYear(c.plan.dueDate) && c.plan.dueDate<today();}
  function needsAttention(record){const c=currentCycle(record);return c.stage==='act'||isLate(record)||(c.stage==='check'&&!c.check.passed);}
  function getCounts(){const all=state().cases;return {active:all.filter(r=>currentCycle(r).stage!=='closed').length,attention:all.filter(needsAttention).length,success:all.filter(r=>currentCycle(r).stage==='closed'&&currentCycle(r).act.decision==='standardize').length};}
  function getSortedCases(){return state().cases.slice().sort((a,b)=>(b.updatedAt||'').localeCompare(a.updatedAt||''));}

  async function openStorage(){
    // Jika pernah beralih dari IndexedDB karena gagal menulis, gunakan versi data fallback.
    try{if(localStorage.getItem(LOCAL_OVERRIDE_KEY)==='1'){const raw=localStorage.getItem(LOCAL_KEY);if(raw){STORAGE.mode='localstorage';return JSON.parse(raw);}}}catch(_){}
    if(typeof indexedDB !== 'undefined'){
      try{
        const db=await new Promise((resolve,reject)=>{
          const req=indexedDB.open(DB_NAME,1);
          req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('documents'))req.result.createObjectStore('documents');};
          req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error||new Error('DB tidak tersedia')); req.onblocked=()=>reject(new Error('DB terkunci'));
        });
        STORAGE.mode='indexeddb'; STORAGE.db=db;
        const stored=await new Promise((resolve,reject)=>{const tx=db.transaction('documents','readonly');const req=tx.objectStore('documents').get('main');req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);});
        return stored;
      }catch(err){STORAGE.db=null;}
    }
    try{
      const test='__epdca_test__';localStorage.setItem(test,'1');localStorage.removeItem(test);
      STORAGE.mode='localstorage';
      const raw=localStorage.getItem(LOCAL_KEY);
      return raw?JSON.parse(raw):null;
    }catch(err){STORAGE.mode='memory';return null;}
  }
  function saveSnapshot(snapshot){
    if(STORAGE.mode==='indexeddb'&&STORAGE.db){
      return new Promise((resolve,reject)=>{
        try{const tx=STORAGE.db.transaction('documents','readwrite');tx.objectStore('documents').put(snapshot,'main');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error||new Error('Gagal menulis data'));tx.onabort=()=>reject(tx.error||new Error('Penyimpanan dibatalkan'));}catch(err){reject(err);}
      });
    }
    if(STORAGE.mode==='localstorage'){localStorage.setItem(LOCAL_KEY,JSON.stringify(snapshot));return Promise.resolve();}
    return Promise.reject(new Error('Penyimpanan lokal tidak tersedia'));
  }
  function paintSave(text,isError=false){const el=root.querySelector('[data-save-indicator]');if(el){el.textContent=text;el.style.color=isError?'#ad3535':'';}}
  function queueSave(){
    if(demoMode)return Promise.resolve();
    clearTimeout(pendingSave);
    paintSave('Menyimpan…');
    const snapshot=clone(realState);
    saveSequence=saveSequence.catch(()=>{}).then(()=>saveSnapshot(snapshot)).then(()=>{lastSaveSuccess=true;paintSave('Tersimpan di perangkat');}).catch(err=>{
      lastSaveSuccess=false;
      if(STORAGE.mode==='indexeddb'){
        try{
          localStorage.setItem(LOCAL_KEY,JSON.stringify(snapshot));
          localStorage.setItem(LOCAL_OVERRIDE_KEY,'1');
          STORAGE.mode='localstorage';lastSaveSuccess=true;
          paintSave('Tersimpan di browser (cadangan)');return;
        }catch(_){}
      }
      paintSave('Gagal menyimpan — unduh cadangan!',true);
    });
    return saveSequence;
  }
  function scheduleSave(){if(demoMode)return;clearTimeout(pendingSave);pendingSave=setTimeout(()=>queueSave(),400);paintSave('Menyimpan…');}
  function immediateSave(){if(demoMode)return Promise.resolve();clearTimeout(pendingSave);return queueSave();}
  function notice(message){
    let t=root.querySelector('.ep-toast');if(t)t.remove();
    t=document.createElement('div');t.className='ep-toast';t.setAttribute('role','status');t.textContent=message;root.appendChild(t);
    if(toastTimer)clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.remove(),3400);
  }
  function heading(){
    const info=demoMode?'SIMULASI — data contoh tidak tersimpan':(state().schoolName||'Nama sekolah belum diisi');
    return `<header class="ep-top"><div><h1>Kendali & Perbaikan Mutu Sekolah</h1><p>${HTML(info)} · Siklus PDCA–TQM</p></div><div class="ep-top-actions"><span class="ep-muted ep-mini" data-save-indicator>${demoMode?'Mode simulasi':STORAGE.mode==='memory'?'⚠ Penyimpanan tidak tersedia':'Data di perangkat'}</span><button class="ep-btn ep-btn-small" data-action="open-settings">⚙ Pengaturan</button><button class="ep-btn ep-btn-small ep-btn-logout" data-action="logout">Keluar</button></div></header>`;
  }
  function render(){
    if(!authorized){renderLogin();return;}
    const cur=page==='editor'&&currentRecord()?renderEditor():page==='cases'?renderCases():page==='reports'?renderReports():renderHome();
    root.innerHTML=`<div class="ep-app"><aside class="ep-aside"><div class="ep-brand"><img class="ep-brandimg" src="${BRAND_LOGO_URL}" alt="Logo Edumind Academy"><span class="ep-brand-label">APLIKASI PDCA–TQM<br>V${APP_VERSION}</span></div><nav class="ep-nav" aria-label="Navigasi aplikasi"><button class="ep-navbutton" ${page==='home'?'aria-current="page"':''} data-action="nav" data-view="home"><span class="ep-navicon">⌂</span> Beranda</button><button class="ep-navbutton" ${page==='cases'||page==='editor'?'aria-current="page"':''} data-action="nav" data-view="cases"><span class="ep-navicon">↻</span> Kegiatan Perbaikan</button><button class="ep-navbutton" ${page==='reports'?'aria-current="page"':''} data-action="nav" data-view="reports"><span class="ep-navicon">▤</span> Laporan & Cadangan</button></nav><div class="ep-sidefoot">Satu sekolah · satu perangkat<br>Data tidak dikirim ke Edumind.<br><span class="ep-sidechip">Buat cadangan secara berkala.</span></div></aside><main class="ep-main">${heading()}${demoMode?`<div class="ep-note ep-amber ep-row" style="margin-bottom:15px"><span>Anda sedang mencoba data contoh. Semua perubahan dalam simulasi tidak disimpan.</span><button class="ep-btn ep-btn-small" data-action="toggle-demo">Keluar simulasi</button></div>`:''}${STORAGE.mode==='memory'?'<div class="ep-note ep-red" style="margin-bottom:15px">Penyimpanan browser tidak tersedia. Data bisa hilang ketika halaman ditutup. Gunakan browser biasa dan periksa pengaturan privasi.</div>':''}<section class="ep-stack" id="ep-page">${cur}</section></main></div>${modalOpen?renderSettings():''}`;
    root.querySelectorAll('[data-case-search]').forEach(el=>{el.hidden=!!searchText&&!el.dataset.caseSearch.includes(searchText.toLowerCase());});
  }
  function sectionHeading(title,sub,extra=''){return `<div class="ep-row"><div><h2 class="ep-title">${HTML(title)}</h2><p class="ep-muted ep-mini">${HTML(sub)}</p></div>${extra}</div>`;}
  function empty(message='Belum ada kegiatan perbaikan.') {return `<div class="ep-empty"><div class="ep-illustration">↻</div><h3>Mulai dari satu masalah nyata</h3><p>${HTML(message)}</p><button class="ep-btn ep-btn-primary" data-action="new">+ Mulai Perbaikan</button></div>`;}
  function statusBadge(record){let text=recordStatus(record);let css=text==='Berhasil'?'ep-success':text==='Ditutup'?'ep-neutral':needsAttention(record)?'ep-warning':'';return `<span class="ep-badge ${css}">${HTML(text)}</span>`;}
  function recordRows(records){return records.length?`<div class="ep-list">${records.map(record=>{
    const cycle=currentCycle(record);const overdue=isLate(record);
    return `<div class="ep-case" data-case-search="${HTML((cycle.plan.problem+' '+cycle.plan.pic).toLowerCase())}"><div class="ep-caseinfo"><b>${HTML(cycle.plan.problem||'Perbaikan baru (draf)')}</b><small>Siklus ${record.cycles.length} · ${HTML(cycle.plan.pic||'PIC belum diisi')} · Diperbarui ${HTML(prettyDate(record.updatedAt))}</small></div><div class="ep-case-side">${overdue?'<span class="ep-badge ep-danger">Terlambat</span>':''}${statusBadge(record)}<button class="ep-btn ep-btn-small" data-action="open-case" data-id="${HTML(record.id)}">Buka →</button></div></div>`;
  }).join('')}</div>`:empty();}
  function renderHome(){const c=getCounts();let list=getSortedCases().slice(0,6);
    return `${!state().schoolName?`<div class="ep-note ep-row"><span>Nama sekolah belum diisi. Isi sekali agar laporan memuat identitas sekolah.</span><button class="ep-btn ep-btn-small" data-action="open-settings">Isi nama sekolah</button></div>`:''}<div class="ep-welcome ep-card"><div class="ep-kicker">Mulai sederhana</div><h2>Satu masalah. Satu rencana. Satu perbaikan nyata.</h2><p>Catat masalah sekolah, jalankan tindakan, periksa hasilnya, lalu tentukan langkah berikutnya melalui siklus PDCA.</p><div class="ep-row-start"><button class="ep-btn ep-btn-primary" data-action="new">+ Mulai Perbaikan</button>${!demoMode?'<button class="ep-btn" data-action="toggle-demo">Coba data simulasi</button>':''}</div></div><div class="ep-grid3"><div class="ep-stat"><div class="ep-statlabel">Sedang diperbaiki</div><div class="ep-statnum">${c.active}</div></div><div class="ep-stat"><div class="ep-statlabel">Perlu perhatian</div><div class="ep-statnum">${c.attention}</div></div><div class="ep-stat"><div class="ep-statlabel">Berhasil ditutup</div><div class="ep-statnum">${c.success}</div></div></div><div class="ep-card">${sectionHeading('Kegiatan terbaru','Pilih kegiatan untuk melanjutkan perbaikan.','<button class="ep-btn ep-btn-small" data-action="nav" data-view="cases">Lihat semua</button>')}${recordRows(list)}</div><div class="ep-note">Data tersimpan pada browser/perangkat ini, bukan server Edumind. Gunakan menu <b>Laporan & Cadangan</b> untuk mengunduh cadangan sebelum berpindah perangkat atau membersihkan browser.</div>`;
  }
  function renderCases(){const records=getSortedCases();return `${sectionHeading('Kegiatan Perbaikan','Satu masalah dapat memiliki beberapa siklus PDCA.','<button class="ep-btn ep-btn-primary" data-action="new">+ Perbaikan Baru</button>')}<div class="ep-card">${records.length?`<div class="ep-toolbar"><input class="ep-search" type="search" data-search-input value="${HTML(searchText)}" placeholder="Cari nama masalah / PIC" aria-label="Cari kegiatan perbaikan"/><span class="ep-muted ep-mini">${records.length} kegiatan</span></div>${recordRows(records)}`:empty()}</div>`;}
  function inputField(bind,label,value,{type='text',hint='',placeholder='',disabled=false,required=true,maxlength=200,min,step}={}){
    return `<div class="ep-field"><label for="ep-${bind.replace('.','-')}">${HTML(label)}${required?' <span class="ep-req">*</span>':''}</label><input id="ep-${bind.replace('.','-')}" data-bind="${bind}" type="${type}" value="${HTML(value)}" ${placeholder?`placeholder="${HTML(placeholder)}"`:''} ${disabled?'disabled':''} ${maxlength?`maxlength="${maxlength}"`:''} ${min!==undefined?`min="${min}"`:''} ${step?`step="${step}"`:''} />${hint?`<span class="ep-hint">${HTML(hint)}</span>`:''}</div>`;
  }
  function areaField(bind,label,value,{hint='',placeholder='',disabled=false,maxlength=500,required=true,rows=2}={}){
    return `<div class="ep-field"><label for="ep-${bind.replace('.','-')}">${HTML(label)}${required?' <span class="ep-req">*</span>':''}</label><textarea id="ep-${bind.replace('.','-')}" data-bind="${bind}" rows="${rows}" ${disabled?'disabled':''} maxlength="${maxlength}" placeholder="${HTML(placeholder)}">${HTML(value)}</textarea>${hint?`<span class="ep-hint">${HTML(hint)}</span>`:''}</div>`;
  }
  function selectField(bind,label,value,options,{disabled=false,hint='',required=true}={}){
    return `<div class="ep-field"><label for="ep-${bind.replace('.','-')}">${HTML(label)}${required?' <span class="ep-req">*</span>':''}</label><select id="ep-${bind.replace('.','-')}" data-bind="${bind}" ${disabled?'disabled':''}>${options.map(opt=>`<option value="${HTML(opt[0])}" ${opt[0]===value?'selected':''}>${HTML(opt[1])}</option>`).join('')}</select>${hint?`<span class="ep-hint">${HTML(hint)}</span>`:''}</div>`;
  }
  function readonlySummary(title,rows){return `<div class="ep-detail"><div class="ep-subhead">${HTML(title)}</div><dl>${rows.map(row=>`<dt>${HTML(row[0])}</dt><dd>${HTML(row[1]||'—')}</dd>`).join('')}</dl></div>`;}
  function currentTargetText(c){const p=c.plan;if(p.method==='criteria')return p.criterion||'—';return `${p.metric||'Indikator'}: ${p.direction==='up'?'minimal':'maksimal'} ${numberText(p.target)} ${p.unit||''}`;}
  function renderPlan(c,locked){const p=c.plan;
    if(locked)return readonlySummary('PLAN — Rencana yang disimpan', [['Masalah',p.problem],['Target',currentTargetText(c)],['Tindakan',p.action],['PIC',p.pic],['Tenggat',prettyDate(p.dueDate)]]);
    return `<div class="ep-subhead">1 · PLAN — Tentukan masalah dan target</div><div class="ep-form">${areaField('plan.problem','Masalah yang ingin diperbaiki',p.problem,{placeholder:'Contoh: Guru piket sering terlambat',maxlength:250})}${selectField('plan.method','Cara mengukur keberhasilan',p.method,[['numeric','Menggunakan angka'],['criteria','Verifikasi satu kriteria']])}${p.method==='numeric'?`<div class="ep-form-grid">${inputField('plan.metric','Apa yang diukur?',p.metric,{placeholder:'Contoh: Ketepatan waktu guru'})}${inputField('plan.unit','Satuan ukuran',p.unit,{placeholder:'%, kasus, hari...',maxlength:30})}</div><div class="ep-form-grid">${selectField('plan.direction','Target yang diinginkan',p.direction,[['up','Semakin tinggi semakin baik'],['down','Semakin rendah semakin baik']])}${inputField('plan.baseline','Kondisi awal',p.baseline,{type:'number',min:0,step:'any',maxlength:0,placeholder:'Contoh: 70'})}</div>${inputField('plan.target','Target angka',p.target,{type:'number',min:0,step:'any',maxlength:0,placeholder:'Contoh: 95'})}`:`${areaField('plan.criterion','Satu kriteria keberhasilan',p.criterion,{placeholder:'Contoh: Seluruh guru menerima umpan balik supervisi tertulis',maxlength:250,hint:'Tulis kondisi yang nanti bisa diperiksa dengan bukti.'})}`}${areaField('plan.action','Satu rencana tindakan',p.action,{placeholder:'Contoh: Susun jadwal piket baru dan pantau pelaksanaannya selama empat minggu',maxlength:400})}<div class="ep-form-grid">${inputField('plan.pic','Penanggung jawab (PIC)',p.pic,{placeholder:'Contoh: Wakasek Kesiswaan',maxlength:90})}${inputField('plan.dueDate','Target selesai',p.dueDate,{type:'date',maxlength:0})}</div><div class="ep-note">Pastikan masalah, target dan rencana tindakan sudah benar sebelum mulai DO. Target tidak bisa diubah diam-diam setelah pelaksanaan dimulai.</div></div>`;
  }
  function renderDo(c,locked){if(locked)return readonlySummary('DO — Pelaksanaan',[['Status',({not_started:'Belum dilaksanakan',partial:'Dilaksanakan sebagian',done:'Sudah dilaksanakan'})[c.do.status]],['Catatan',c.do.notes],['Dicatat',prettyDate(c.do.recordedAt)]]);
    return `<div class="ep-subhead">2 · DO — Jalankan tindakan</div>${readonlySummary('Rencana tindakan',[['Apa yang dikerjakan?',c.plan.action],['Penanggung jawab',c.plan.pic],['Target selesai',prettyDate(c.plan.dueDate)]])}<div class="ep-form">${selectField('do.status','Status pelaksanaan',c.do.status,[['not_started','Belum dilaksanakan'],['partial','Dilaksanakan sebagian'],['done','Sudah dilaksanakan']])}${areaField('do.notes','Catatan pelaksanaan',c.do.notes,{placeholder:'Apa yang sudah dilakukan? Apa hambatannya?',required:false,maxlength:400})}<div class="ep-note">DO mencatat pekerjaan. Keberhasilan target baru dinilai pada CHECK.</div></div>`;
  }
  function numericOutcome(c){const n=getNumber(c.check.actual),t=getNumber(c.plan.target);if(n===null||t===null)return null;return c.plan.direction==='up'?n>=t:n<=t;}
  function renderCheckPreview(c){if(c.plan.method==='numeric'){const v=numericOutcome(c);if(v===null)return '<span class="ep-muted ep-mini">Isi hasil aktual untuk melihat kesimpulan otomatis.</span>';const delta=getNumber(c.check.actual)-getNumber(c.plan.baseline);return `<div class="ep-numeric-preview"><span class="ep-badge ${v?'ep-success':'ep-warning'}">${v?'Target tercapai':'Target belum tercapai'}</span><b>Hasil: ${numberText(c.check.actual)} ${HTML(c.plan.unit)}</b><span class="ep-mini">Perubahan dari awal: ${delta>0?'+':''}${numberText(delta)} ${HTML(c.plan.unit)} (bukan persentase relatif).</span></div>`;}
    return c.check.criteriaStatus==='yes'?'<div class="ep-note">Kriteria ditandai terpenuhi. Cantumkan bukti sebelum melanjutkan.</div>':c.check.criteriaStatus==='no'?'<div class="ep-note ep-amber">Kriteria belum terpenuhi. Tentukan tindak lanjut pada ACT.</div>':'<div class="ep-note ep-amber">Kriteria belum diverifikasi. Lengkapi pemeriksaan sebelum ACT.</div>';
  }
  function renderCheck(c,locked){if(locked)return readonlySummary('CHECK — Pemeriksaan',[['Target',currentTargetText(c)],['Hasil',c.plan.method==='numeric'?(numberText(c.check.actual)+' '+c.plan.unit):({'yes':'Terpenuhi','no':'Belum terpenuhi'}[c.check.criteriaStatus]||'Belum diverifikasi')],['Kesimpulan',c.check.passed===null?'Belum dinilai':c.check.passed?'Target tercapai':'Target belum tercapai'],['Bukti',c.check.evidence],['Tanggal',prettyDate(c.check.checkedAt)]]);
    return `<div class="ep-subhead">3 · CHECK — Apakah target tercapai?</div>${readonlySummary('Target yang diperiksa',[['Target',currentTargetText(c)],['Kondisi awal',c.plan.method==='numeric'?numberText(c.plan.baseline)+' '+c.plan.unit:'Tidak menggunakan angka']])}<div class="ep-form">${c.plan.method==='numeric'?inputField('check.actual','Hasil aktual',c.check.actual,{type:'number',min:0,step:'any',maxlength:0,placeholder:'Masukkan hasil sesuai ukuran target'}):selectField('check.criteriaStatus','Hasil pemeriksaan kriteria',c.check.criteriaStatus,[['','Belum diverifikasi'],['yes','Terpenuhi'],['no','Belum terpenuhi']])}${areaField('check.evidence','Sumber bukti singkat',c.check.evidence,{placeholder:'Contoh: Rekap kehadiran Nov 2026, disimpan di TU',maxlength:350,hint:'Tuliskan sumber/rujukan. Jangan masukkan data pribadi siswa.'})}<div data-check-preview>${renderCheckPreview(c)}</div></div>`;
  }
  function renderAct(c,locked){if(locked)return readonlySummary('ACT — Keputusan',[['Hasil',c.check.passed?'Target tercapai':'Target belum tercapai'],['Keputusan',({standardize:'Pertahankan praktik yang berhasil',repeat:'Jalankan siklus berikutnya',stop:'Hentikan dengan alasan'})[c.act.decision]||'—'],['Catatan',c.act.notes],['Tanggal keputusan',prettyDate(c.act.decidedAt)]]);
    let choices=c.check.passed?[['','Pilih tindak lanjut'],['standardize','Pertahankan praktik yang berhasil'],['repeat','Lanjutkan ke siklus berikutnya']]:[['','Pilih tindak lanjut'],['repeat','Perbaiki lagi dalam siklus berikutnya'],['stop','Hentikan kegiatan dengan alasan']];
    return `<div class="ep-subhead">4 · ACT — Tetapkan tindak lanjut</div><div class="ep-note ${c.check.passed?'':'ep-amber'}">${c.check.passed?'Target sudah tercapai berdasarkan data pemeriksaan. Pilih apakah praktik dipertahankan atau ditingkatkan lagi.':'Target belum terpenuhi. Pilih perbaikan ulang atau hentikan kegiatan dengan alasan.'}</div><div class="ep-form">${selectField('act.decision','Keputusan',c.act.decision,choices)}${areaField('act.notes','Catatan keputusan',c.act.notes,{placeholder:c.check.passed?'Contoh: Jadwal piket baru ditetapkan sebagai kebiasaan kerja':'Contoh: Susun ulang jadwal dan perkuat pemantauan pekan berikutnya',maxlength:400})}</div>`;
  }
  function renderEditor(){let record=currentRecord();if(!record)return renderCases();const c=currentCycle(record);const stages=['plan','do','check','act'];const live=c.stage==='closed'?'act':c.stage;let showing=inspectStep||live;const isOld=showing!==live||c.stage==='closed';const idx=stages.indexOf(live);const selected=stages.indexOf(showing);
    const stepUI=stages.map((s,i)=>`<button class="ep-step ${s===showing?'ep-active':i<idx?'ep-done':''}" data-action="view-step" data-step="${s}" ${i>idx?'disabled':''} ${s===showing?'aria-current="step"':''}>${i<idx?'✓ ':''}${s.toUpperCase()}</button>`).join('');
    const section=showing==='plan'?renderPlan(c,isOld):showing==='do'?renderDo(c,isOld):showing==='check'?renderCheck(c,isOld):renderAct(c,isOld);
    let footer='';if(!isOld){let labels={plan:'Simpan & Mulai DO →',do:'Simpan & Lanjut CHECK →',check:'Simpan & Lanjut ACT →',act:'Tetapkan Keputusan ✓'};footer=`<div class="ep-form-footer"><span class="ep-mini ep-muted">Draf disimpan otomatis di perangkat.</span><button class="ep-btn ep-btn-primary" data-action="advance">${labels[live]}</button></div>`;}
    return `<div class="ep-row"><div><button class="ep-btn ep-btn-small ep-btn-quiet" data-action="nav" data-view="cases">← Daftar kegiatan</button><h2 class="ep-title" style="margin-top:8px;overflow-wrap:anywhere">${HTML(c.plan.problem||'Perbaikan baru')}</h2><div class="ep-chipline"><span class="ep-badge">Siklus ${record.cycles.length}</span>${statusBadge(record)}${isLate(record)?'<span class="ep-badge ep-danger">Lewat tenggat</span>':''}</div></div><div class="ep-row-start"><button class="ep-btn ep-btn-small" data-action="print-one">Cetak laporan</button><button class="ep-btn ep-btn-small ep-btn-danger" data-action="delete">Hapus</button></div></div><div class="ep-card"><p class="ep-muted ep-mini">Ikuti urutan berikut. Tahap yang selesai dapat dilihat kembali tanpa mengubah riwayatnya.</p><div class="ep-steps">${stepUI}</div>${isOld?`<div class="ep-note ep-amber ep-row" style="margin-bottom:15px"><span>${c.stage==='closed'?'Siklus sudah ditutup dan tersimpan sebagai riwayat.':'Anda sedang melihat tahap sebelumnya (hanya baca).'}</span>${c.stage!=='closed'?'<button class="ep-btn ep-btn-small" data-action="view-step" data-step="'+live+'">Kembali ke tahap aktif</button>':''}</div>`:''}<div class="ep-form" id="ep-current-form">${section}<div id="ep-form-error" role="alert"></div>${footer}</div></div>${record.cycles.length>1?`<div class="ep-card"><h3>Riwayat siklus sebelumnya</h3>${record.cycles.slice(0,-1).map((s,i)=>`<div class="ep-case"><div class="ep-caseinfo"><b>Siklus ${i+1}</b><small>${s.check.passed?'Target tercapai':'Target belum tercapai'} · ${HTML(prettyDate(s.act.decidedAt))}</small></div><button class="ep-btn ep-btn-small" data-action="print-one">Cetak riwayat</button></div>`).join('')}</div>`:''}`;
  }
  function renderReports(){let records=getSortedCases();return `${sectionHeading('Laporan & Cadangan','Cetak hasil PDCA dan lindungi data sekolah Anda.')}<div class="ep-card"><h3>Laporan kegiatan</h3><p class="ep-muted ep-mini">Buka kegiatan lalu pilih <b>Cetak laporan</b> untuk melihat PLAN–DO–CHECK–ACT lengkap beserta riwayat siklusnya.</p>${records.length?recordRows(records.slice(0,5)):'<p class="ep-muted ep-mini">Belum ada kegiatan untuk dilaporkan.</p>'}<div class="ep-row-start" style="margin-top:15px"><button class="ep-btn" data-action="print-recap" ${records.length?'':'disabled'}>▤ Cetak rekap sekolah</button><button class="ep-btn" data-action="export-csv" ${records.length?'':'disabled'}>↓ Ekspor rekap CSV</button></div></div><div class="ep-card"><h3>Cadangkan data sekolah</h3><p class="ep-muted ep-mini">Ekspor JSON menyimpan seluruh kasus, hasil, dan riwayat siklus. Lakukan secara berkala, terutama sebelum pindah perangkat atau menghapus data browser.</p><div class="ep-row-start"><button class="ep-btn ep-btn-primary" data-action="export-json" ${demoMode?'disabled':''}>↓ Unduh cadangan JSON</button><button class="ep-btn" data-action="import-json" ${demoMode?'disabled':''}>↑ Pulihkan cadangan JSON</button><input type="file" id="ep-import-file" accept=".json,application/json" hidden></div><div class="ep-note ep-amber" style="margin-top:15px">Memulihkan cadangan akan <b>mengganti seluruh data sekolah pada browser ini</b>. Aplikasi meminta konfirmasi lebih dahulu. Cadangan tidak menyertakan dokumen yang hanya dicantumkan sebagai referensi.</div></div><div class="ep-card"><h3>Petunjuk singkat</h3><ol class="ep-helpgrid"><li>1. Tekan <b>Mulai Perbaikan</b> dan tuliskan satu masalah serta satu target.</li><li>2. Lengkapi PLAN, lalu DO, CHECK, dan ACT.</li><li>3. Jika belum berhasil, gunakan siklus berikutnya dalam kasus yang sama.</li><li>4. Cetak laporan dan cadangkan data secara berkala.</li></ol></div>`;}
  function renderSettings(){return `<div class="ep-modalback" role="presentation"><div class="ep-modal" role="dialog" aria-modal="true" aria-label="Pengaturan sekolah"><div><h3>Pengaturan sekolah</h3><p class="ep-muted ep-mini">Satu nama sekolah digunakan pada seluruh laporan.</p></div>${inputField('settings.schoolName','Nama sekolah',state().schoolName,{placeholder:'Contoh: SMP Islam Harapan',maxlength:110})}<div class="ep-row" style="justify-content:flex-end"><button class="ep-btn" data-action="close-settings">Batal</button><button class="ep-btn ep-btn-primary" data-action="save-settings">Simpan</button></div></div></div>`;}
  function error(message){const el=root.querySelector('#ep-form-error');if(el){el.className='ep-note ep-red';el.textContent=message;el.scrollIntoView({block:'nearest',behavior:'smooth'});}else notice(message);}
  function validatePlan(p){
    if(!p.problem.trim()||!p.action.trim()||!p.pic.trim()||!p.dueDate)return 'Lengkapi masalah, rencana tindakan, PIC, dan tenggat.';
    if(!safeYear(p.dueDate)||Number.isNaN(Date.parse(p.dueDate+'T12:00:00')))return 'Tanggal target tidak valid.';
    if(p.method==='numeric'){
      const a=getNumber(p.baseline),b=getNumber(p.target);
      if(!p.metric.trim()||!p.unit.trim()||a===null||b===null)return 'Lengkapi indikator, satuan, kondisi awal, dan target angka.';
      if(a<0||b<0)return 'Nilai angka harus nol atau lebih besar.';
      if(p.unit.trim()==='%'&&(a>100||b>100))return 'Persentase harus berada antara 0 dan 100.';
      if(p.direction==='up'&&b<a)return 'Target peningkatan tidak boleh lebih kecil dari kondisi awal.';
      if(p.direction==='down'&&b>a)return 'Target penurunan tidak boleh lebih besar dari kondisi awal.';
    }else if(!p.criterion.trim())return 'Tulis satu kriteria keberhasilan yang akan diperiksa.';
    return '';
  }
  function validateDo(d){if(d.status==='not_started')return 'Tindakan belum dilaksanakan. Mulai tindakan sebelum masuk ke CHECK.';if(d.status==='partial'&&!d.notes.trim())return 'Jika tindakan baru dilakukan sebagian, tuliskan apa yang sudah dilakukan atau kendalanya.';return '';}
  function validateCheck(c){if(!c.check.evidence.trim())return 'Cantumkan sumber bukti singkat untuk hasil pemeriksaan.';
    if(c.plan.method==='numeric'){const val=getNumber(c.check.actual);if(val===null||val<0)return 'Masukkan hasil aktual berupa angka nol atau lebih besar.';if(c.plan.unit.trim()==='%'&&val>100)return 'Hasil persentase tidak boleh lebih dari 100.';c.check.passed=numericOutcome(c);
    }else{if(!['yes','no'].includes(c.check.criteriaStatus))return 'Pilih apakah kriteria terpenuhi atau belum terpenuhi. Jika belum ada bukti, tetap di CHECK.';c.check.passed=c.check.criteriaStatus==='yes';}
    return '';
  }
  function advance(){const r=currentRecord();if(!r)return;const c=currentCycle(r);if(c.stage==='closed'||inspectStep)return;let message='';
    if(c.stage==='plan'){message=validatePlan(c.plan);if(message)return error(message);c.stage='do';}
    else if(c.stage==='do'){message=validateDo(c.do);if(message)return error(message);c.do.recordedAt=now();c.stage='check';}
    else if(c.stage==='check'){message=validateCheck(c);if(message)return error(message);c.check.checkedAt=now();c.stage='act';c.act.decision='';}
    else if(c.stage==='act'){
      let dec=c.act.decision;
      if(!c.act.notes.trim())return error('Tulis catatan keputusan agar tindak lanjutnya jelas.');
      if(!['standardize','repeat','stop'].includes(dec))return error('Pilih keputusan tindak lanjut.');
      if(dec==='standardize'&&!c.check.passed)return error('Belum bisa mempertahankan praktik sebagai keberhasilan karena target belum tercapai.');
      if(dec==='stop'&&c.check.passed)return error('Jika target tercapai, pilih pertahankan praktik atau siklus berikutnya.');
      c.act.decidedAt=now();c.stage='closed';
      if(dec==='repeat'){const next=newCycle(c);r.cycles.push(next);notice('Siklus baru dibuat. Riwayat lama tetap tersimpan.');}
      else notice(dec==='standardize'?'Perbaikan ditutup: target tercapai.':'Kegiatan ditutup dengan alasan.');
    }
    r.updatedAt=now();inspectStep='';immediateSave();render();
  }
  function bindInput(target){
    const key=target.getAttribute('data-bind');if(!key)return;
    if(key==='settings.schoolName')return;
    let c=currentRecord()?currentCycle(currentRecord()):null;if(!c||c.stage==='closed'||inspectStep)return;
    const pieces=key.split('.');if(pieces.length!==2||!Object.prototype.hasOwnProperty.call(c,pieces[0])||!Object.prototype.hasOwnProperty.call(c[pieces[0]],pieces[1]))return;
    c[pieces[0]][pieces[1]]=target.value;
    const oldError=root.querySelector('#ep-form-error');
    if(oldError && oldError.classList.contains('ep-red')){oldError.className='';oldError.textContent='';}
    currentRecord().updatedAt=now();
    scheduleSave();
    if(key==='check.actual'||key==='check.criteriaStatus'){
      const out=root.querySelector('[data-check-preview]');if(out)out.innerHTML=renderCheckPreview(c);
    }
    if(key==='plan.method'){
      render();
    }
  }
  function setPage(name){page=name;searchText='';selectedId=name==='editor'?selectedId:'';inspectStep='';render();}
  function addCase(){const c=newCycle(),r={id:uid(),createdAt:now(),updatedAt:now(),cycles:[c]};state().cases.push(r);selectedId=r.id;page='editor';inspectStep='';immediateSave();render();}
  function makeDemo(){
    const demo=blankState();demo.schoolName='SMP Islam Contoh (Simulasi)';
    const c1=newCycle();Object.assign(c1.plan,{problem:'Meningkatkan ketepatan waktu guru piket',action:'Atur jadwal piket baru dan lakukan pemantauan mingguan',pic:'Wakasek Kesiswaan',dueDate:datePlus(8),method:'numeric',metric:'Ketepatan waktu guru piket',unit:'%',direction:'up',baseline:'70',target:'95'});c1.stage='check';c1.do={status:'done',notes:'Jadwal baru telah diterapkan selama dua minggu.',recordedAt:now()};c1.check.actual='88';c1.check.evidence='Rekap daftar hadir minggu 1–2';
    const c2=newCycle();Object.assign(c2.plan,{problem:'Memastikan supervisi kelas ditindaklanjuti',action:'Berikan umpan balik tertulis untuk setiap guru yang disupervisi',pic:'Koordinator Kurikulum',dueDate:datePlus(-5),method:'criteria',criterion:'Semua guru yang disupervisi telah menerima umpan balik tertulis'});c2.stage='closed';c2.do={status:'done',notes:'Tindakan sudah dilakukan.',recordedAt:now()};c2.check={actual:'',criteriaStatus:'yes',evidence:'Arsip formulir umpan balik di ruang kurikulum',checkedAt:now(),passed:true};c2.act={decision:'standardize',notes:'Gunakan form ini untuk seluruh supervisi berikutnya.',decidedAt:now()};
    demo.cases=[{id:uid(),createdAt:now(),updatedAt:now(),cycles:[c1]},{id:uid(),createdAt:now(),updatedAt:now(),cycles:[c2]}];return demo;
  }
  function exportFile(filename,content,mime){const blob=new Blob([content],{type:mime});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);}
  function exportJSON(){if(demoMode)return;const data={format:'edumind-pdca-backup',formatVersion:1,createdAt:now(),data:clone(realState)};exportFile('edumind-pdca-cadangan-'+today()+'.json',JSON.stringify(data,null,2),'application/json;charset=utf-8');notice('Cadangan JSON diunduh. Simpan di tempat aman.');}
  function csvCell(value){let s=String(value??'');if(/^[\s\uFEFF]*[=+\-@\t\r]/u.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
  function exportCSV(){const lines=[['Nama sekolah','Masalah','Siklus','Target','Hasil','Keputusan','PIC','Tenggat','Tanggal ACT']];getSortedCases().forEach(r=>{r.cycles.forEach((c,i)=>lines.push([state().schoolName,c.plan.problem,i+1,currentTargetText(c),c.plan.method==='numeric'?numberText(c.check.actual)+' '+c.plan.unit:({'yes':'Terpenuhi','no':'Belum terpenuhi'}[c.check.criteriaStatus]||'Belum'),({standardize:'Berhasil',repeat:'Dilanjutkan',stop:'Dihentikan'}[c.act.decision]||c.stage.toUpperCase()),c.plan.pic,c.plan.dueDate,c.act.decidedAt?prettyDate(c.act.decidedAt):'']));});exportFile('edumind-pdca-rekap-'+today()+'.csv','\uFEFF'+lines.map(row=>row.map(csvCell).join(',')).join('\r\n'),'text/csv;charset=utf-8');notice('Rekap CSV diunduh.');}
  function checkRestoreObject(parsed){
    if(!parsed||parsed.format!=='edumind-pdca-backup'||parsed.formatVersion!==1)throw new Error('Berkas bukan cadangan Edumind PDCA V1.');
    const s=parsed.data;if(!s||s.schemaVersion!==1||typeof s.schoolName!=='string'||!Array.isArray(s.cases)||s.cases.length>1000)throw new Error('Struktur cadangan tidak sesuai.');
    const clean=blankState();clean.schoolName=s.schoolName.slice(0,110);
    const seen=new Set();
    for(const r of s.cases){
      if(!r||typeof r.id!=='string'||seen.has(r.id)||!Array.isArray(r.cycles)||r.cycles.length<1||r.cycles.length>100||typeof r.createdAt!=='string')throw new Error('Ada kegiatan rusak atau ID ganda dalam cadangan.');seen.add(r.id);
      const out={id:r.id,createdAt:r.createdAt,updatedAt:typeof r.updatedAt==='string'?r.updatedAt:r.createdAt,cycles:[]};
      for(const c of r.cycles){
        if(!c||!['plan','do','check','act','closed'].includes(c.stage)||!c.plan||!c.do||!c.check||!c.act||typeof c.id!=='string')throw new Error('Ada riwayat siklus yang tidak valid.');
        const p=c.plan,d=c.do,h=c.check,a=c.act;
        const requiredStrings=['problem','action','pic','dueDate','method','metric','unit','direction','baseline','target','criterion'];
        if(requiredStrings.some(k=>typeof p[k]!=='string')||!['numeric','criteria'].includes(p.method)||!['up','down'].includes(p.direction)||!['not_started','partial','done'].includes(d.status)||typeof d.notes!=='string'||typeof h.evidence!=='string'||typeof h.actual!=='string'||typeof h.criteriaStatus!=='string'||typeof a.decision!=='string'||typeof a.notes!=='string')throw new Error('Ada isian kegiatan yang tidak sesuai.');
        if(p.problem.length>250||p.action.length>400||p.pic.length>90||p.metric.length>200||p.unit.length>30||p.criterion.length>250||d.notes.length>400||h.evidence.length>350||a.notes.length>400)throw new Error('Ada kolom dengan panjang berlebih.');
        if(![null,true,false].includes(h.passed)||!['','yes','no'].includes(h.criteriaStatus)||!['','standardize','repeat','stop'].includes(a.decision))throw new Error('Status pemeriksaan/keputusan tidak valid.');
        const cycle={id:c.id,startedAt:typeof c.startedAt==='string'?c.startedAt:'',stage:c.stage,plan:Object.assign({},p),do:{status:d.status,notes:d.notes,recordedAt:typeof d.recordedAt==='string'?d.recordedAt:''},check:{actual:h.actual,criteriaStatus:h.criteriaStatus,evidence:h.evidence,checkedAt:typeof h.checkedAt==='string'?h.checkedAt:'',passed:h.passed},act:{decision:a.decision,notes:a.notes,decidedAt:typeof a.decidedAt==='string'?a.decidedAt:''}};
        if(cycle.stage==='closed'&&!cycle.act.decision)throw new Error('Siklus tertutup tanpa keputusan.');
        out.cycles.push(cycle);
      }
      // Semua siklus sebelumnya harus ditutup, hanya siklus terakhir boleh aktif.
      if(out.cycles.slice(0,-1).some(c=>c.stage!=='closed'))throw new Error('Urutan siklus dalam cadangan tidak konsisten.');
      clean.cases.push(out);
    }
    return clean;
  }
  async function importJSON(file){if(demoMode)return;if(!file||file.size>5*1024*1024){notice('File terlalu besar. Maksimum 5 MB.');return;}
    try{const obj=JSON.parse(await file.text());const incoming=checkRestoreObject(obj);const yes=window.confirm(`Pulihkan cadangan untuk "${incoming.schoolName||'Sekolah tanpa nama'}" (${incoming.cases.length} kegiatan)?\n\nSEMUA data sekolah pada browser ini akan diganti. Jika perlu, unduh cadangan saat ini dahulu.`);if(!yes)return;
      realState=incoming;selectedId='';page='home';inspectStep='';await immediateSave();render();notice(lastSaveSuccess?'Data cadangan berhasil dipulihkan.':'Data terbaca tetapi gagal disimpan. Unduh cadangan dan periksa penyimpanan browser.');
    }catch(err){notice('Pemulihan dibatalkan: '+(err&&err.message?err.message:'File tidak valid'));}
  }
  function printCss(){return `@page{size:A4;margin:16mm}body{font-family:Arial,Helvetica,sans-serif;color:#18382d;font-size:11pt;line-height:1.5}h1{font-size:20pt;color:#0e4c3e;margin:0 0 3mm}h2{font-size:13pt;color:#0e4c3e;border-bottom:1px solid #aecabb;padding-bottom:2mm;margin:8mm 0 3mm}h3{font-size:11pt}small,.minor{color:#657970}table{border-collapse:collapse;width:100%;font-size:10pt}td,th{padding:6px 8px;border:1px solid #d7e2d9;vertical-align:top;text-align:left;overflow-wrap:anywhere}th{background:#eef5f0;width:29%}.meta{border-top:3px solid #c4a25e;padding-top:6mm;margin-bottom:7mm}.tag{display:inline-block;border-radius:30px;padding:2px 9px;background:#e9f5eb}.section{page-break-inside:avoid}footer{margin-top:10mm;font-size:9pt;color:#6f7e77}p{overflow-wrap:anywhere}`;}
  function printTable(rows){return '<table>'+rows.map(([k,v])=>`<tr><th>${HTML(k)}</th><td>${HTML(v??'—')}</td></tr>`).join('')+'</table>';}
  function printSingle(record){const cycles=record.cycles.map((c,i)=>`<section class="section"><h2>Siklus ${i+1} · ${HTML(c.stage==='closed'?'Selesai':'Tahap '+c.stage.toUpperCase())}</h2>${printTable([['Masalah',c.plan.problem],['Target',currentTargetText(c)],['Kondisi awal',c.plan.method==='numeric'?numberText(c.plan.baseline)+' '+c.plan.unit:'Verifikasi kriteria'],['Rencana tindakan',c.plan.action],['Penanggung jawab',c.plan.pic],['Tenggat',prettyDate(c.plan.dueDate)],['DO — Status',({not_started:'Belum dimulai',partial:'Sebagian',done:'Sudah dilaksanakan'})[c.do.status]],['DO — Catatan',c.do.notes],['CHECK — Hasil',c.plan.method==='numeric'?(c.check.actual!==''?numberText(c.check.actual)+' '+c.plan.unit:'Belum dinilai'):({'yes':'Terpenuhi','no':'Belum terpenuhi'}[c.check.criteriaStatus]||'Belum diverifikasi')],['CHECK — Kesimpulan',c.check.passed===null?'Belum dievaluasi':c.check.passed?'Target tercapai':'Target belum tercapai'],['Sumber bukti',c.check.evidence],['ACT — Keputusan',({standardize:'Standarkan praktik',repeat:'Ulangi siklus',stop:'Dihentikan'}[c.act.decision]||'Belum diputuskan')],['ACT — Catatan',c.act.notes]])}</section>`).join('');return `<h1>Laporan Perbaikan Mutu Sekolah</h1><div class="meta"><b>${HTML(state().schoolName||'Nama sekolah belum diisi')}</b><br><small>${HTML(record.cycles[0].plan.problem||'Kegiatan perbaikan')} · Dicetak ${HTML(prettyDate(now()))}</small></div>${cycles}<footer>Edumind Academy · Laporan internal berbasis isian pengguna. Bukan sertifikat atau hasil audit independen.</footer>`;}
  function printRecap(){return `<h1>Rekap Kegiatan Perbaikan Mutu</h1><div class="meta"><b>${HTML(state().schoolName||'Nama sekolah belum diisi')}</b><br><small>Dicetak ${HTML(prettyDate(now()))}</small></div><table><tr><th>No.</th><th>Masalah</th><th>Siklus</th><th>Posisi</th><th>PIC</th></tr>${getSortedCases().map((r,i)=>{const c=currentCycle(r);return `<tr><td>${i+1}</td><td>${HTML(c.plan.problem)}</td><td>${r.cycles.length}</td><td>${HTML(recordStatus(r))}</td><td>${HTML(c.plan.pic)}</td></tr>`;}).join('')}</table><footer>Edumind Academy · Ringkasan kegiatan berdasarkan data yang diisi sekolah.</footer>`;}
  function printHTML(markup){const frame=document.createElement('iframe');frame.setAttribute('title','Pratinjau cetak laporan');frame.style.cssText='position:fixed;left:-10000px;top:0;width:794px;height:1100px;border:0';document.body.appendChild(frame);
    const doc=frame.contentDocument;doc.open();doc.write(`<!doctype html><html lang="id"><head><meta charset="utf-8"><title>Laporan PDCA Edumind</title><style>${printCss()}</style></head><body>${markup}</body></html>`);doc.close();
    setTimeout(()=>{try{frame.contentWindow.focus();frame.contentWindow.print();}catch(err){notice('Browser tidak mengizinkan cetak otomatis.');}setTimeout(()=>frame.remove(),20000);},160);
  }
  function handleClick(event){const node=event.target.closest('[data-action]');if(!node||!root.contains(node))return;const action=node.dataset.action;
    if(action==='toggle-auth-password'){
      const input=root.querySelector('#ep-auth-password');if(!input)return;
      const show=input.type==='password';input.type=show?'text':'password';node.textContent=show?'Sembunyikan':'Lihat';node.setAttribute('aria-pressed',show?'true':'false');return;
    }
    if(!authorized)return;
    if(action==='logout'){signOut();return;}
    if(action==='nav'){setPage(node.dataset.view);return;}
    if(action==='new'){addCase();return;}
    if(action==='open-case'){selectedId=node.dataset.id;page='editor';inspectStep='';render();return;}
    if(action==='view-step'){inspectStep=node.dataset.step===currentCycle(currentRecord()).stage?'':node.dataset.step;if(currentCycle(currentRecord()).stage==='closed')inspectStep=node.dataset.step;render();return;}
    if(action==='advance'){advance();return;}
    if(action==='open-settings'){modalOpen=true;render();return;}
    if(action==='close-settings'){modalOpen=false;render();return;}
    if(action==='save-settings'){let field=root.querySelector('[data-bind="settings.schoolName"]');let name=field?field.value.trim():'';if(!name){notice('Isi nama sekolah terlebih dahulu.');return;}state().schoolName=name.slice(0,110);modalOpen=false;immediateSave();render();notice('Nama sekolah disimpan.');return;}
    if(action==='toggle-demo'){if(!demoMode)immediateSave();demoMode=!demoMode;demoState=demoMode?makeDemo():null;page='home';selectedId='';inspectStep='';modalOpen=false;searchText='';render();return;}
    if(action==='delete'){const rec=currentRecord();if(rec&&window.confirm('Hapus kegiatan ini beserta seluruh riwayat siklusnya? Data yang dihapus tidak dapat dikembalikan tanpa cadangan.')){state().cases=state().cases.filter(r=>r.id!==rec.id);immediateSave();setPage('cases');notice('Kegiatan dihapus.');}return;}
    if(action==='export-json'){exportJSON();return;}
    if(action==='import-json'){const inp=root.querySelector('#ep-import-file');if(inp)inp.click();return;}
    if(action==='export-csv'){exportCSV();return;}
    if(action==='print-one'){const rec=currentRecord();if(rec)printHTML(printSingle(rec));else notice('Pilih kegiatan untuk mencetak laporan.');return;}
    if(action==='print-recap'){printHTML(printRecap());return;}
  }
  root.addEventListener('click',handleClick);
  root.addEventListener('submit',event=>{
    if(event.target && event.target.id==='ep-auth-form')handleLogin(event);
  });
  root.addEventListener('input',e=>{
    if(!authorized)return;
    if(e.target.matches('[data-search-input]')){searchText=e.target.value.toLowerCase().trim();root.querySelectorAll('[data-case-search]').forEach(el=>{el.hidden=!!searchText&&!el.dataset.caseSearch.includes(searchText);});return;}
    if(e.target.matches('[data-bind]'))bindInput(e.target);
  });
  root.addEventListener('change',e=>{
    if(!authorized)return;
    if(e.target.id==='ep-import-file'){const f=e.target.files?.[0];if(f)importJSON(f);e.target.value='';return;}
    if(e.target.matches('[data-bind]'))bindInput(e.target);
  });
  root.addEventListener('keydown',e=>{if(e.key==='Escape'&&modalOpen){modalOpen=false;render();}});
  (async()=>{
    try{const stored=await openStorage();if(stored){realState=checkRestoreObject({format:'edumind-pdca-backup',formatVersion:1,data:stored});}}
    catch(err){STORAGE.mode='memory';root.innerHTML='<div style="padding:20px;color:#a62c2c;background:#fff3f2;border-radius:12px"><b>Data lokal tidak dapat dibaca.</b><p>Untuk mencegah penghapusan data, aplikasi tidak akan menimpanya. Jangan hapus data browser. Hubungi pendamping teknis.</p></div>';return;}
    render();
  })();
})();
