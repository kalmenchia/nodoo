const nodoo = require('./nodoo');

let url = 'http://localhost:8069';
let db = 'odoo';
const odoo = nodoo(url, db);

const playground = async () => {
  let res = await odoo.login('admin', 'admin');
  //   console.log(res);
  res = await odoo.databases();
  //   console.log(res);
  res = await odoo.sessionInfo();
  //   console.log(res);
  res = await odoo.serverInfo();
  //   console.log(res);
  res = await odoo.searchRead('res.users', null, ['name', 'login', 'email']);
  //   console.log(res);
  res = await odoo.load('res.users', 2);
  //   console.log(res.login);
  const res_company = await odoo.search(
    'res.partner',
    [['is_company', '=', 'True']],
    {
      limit: 5
    }
  );
  console.log(res_company);
  res = await odoo.searchCount('res.partner', [['is_company', '=', 'True']]);
  console.log(res);
  res = await odoo.read('res.partner', res_company, ['name']);
  console.log(res);
  res = await odoo.fieldsGet('res.bank', ['string', 'help', 'type']);
  console.log(res);
  res = await odoo.logout();
  //   console.log(res);
};

playground(odoo);