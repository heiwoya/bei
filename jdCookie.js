/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJgF274ADBdDiW32iwxSB5oPDMlo11q08WqGoX0Hgxx-cse4yBHk1tJuqqaxpJ5juuQxqNx3Do; pt_pin=jd_5d5c043b0f0ba;',
//账号一ck,例:pt_key=XXX;pt_pin=XXX;
'pt_key=AAJgHPjVADB0GdHYEg0V3o8OlsS3NG2WwcKvbPAfMPwmnNLGr3HAF9erQH1P2hlGjeCzsXK9UGA; pt_pin=jd_76a4f250e5c07;',
//账号二ck,例:pt_key=XXX;pt_pin=XXX;
'pt_key=AAJgISmaADCR3lsqE8BOQDMih7fPxrc_-utzlRPKRbIIaXfnorseteONU7ogYXX2vw_NB74K_TU; pt_pin=jd_gSqkiwhWOErh;',
//账号三ck,例:pt_key=XXX;pt_pin=XXX;
'pt_key=AAJgISzkADA3n9KeOlYCDIukMV4j5lEfrokjoSusze1mM-h8xXofoiTupBcQ8ITJAFHkcJ0tfj8; pt_pin=jd_xwizfXcRwQFc;',
//账号四ck,例:pt_key=XXX;pt_pin=XXX;
'pt_key=AAJgIl91ADCP7OSwJ_hBjMZp0Cd0ro3HJIsDSsDxgdAQb5bNENAgAJmT6isn1xxzr5RaJZgTczY; pt_pin=jd_PMsWjLohHAfj;',
//账号五ck,例:pt_key=XXX;pt_pin=XXX;
'pt_key=AAJgIpY9ADC_X0aPZSnXKNt34r9EyS-sGNwX5k5DJFysxTgKuJu4bzIZdQ0j_KBI9Yawkp7QglA; pt_pin=jd_XOANOaZJtBnb;',
//账号六ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
