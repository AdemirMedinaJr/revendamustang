exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carros').del()
    .then(function () {
      // Inserts seed entries
      return knex('carros').insert([
        {modelo: "Palio", marca_id: 2, ano: 2018, preco: 32500, foto: "https://www.autoo.com.br/fotos/2011/960_640/palio_sporting_053_960_640.jpg"},
        {modelo: "Sandero", marca_id: 1, ano: 2017, preco: 38500, foto: "https://i.ytimg.com/vi/WURsO4LKgfI/maxresdefault.jpg"},
        {modelo: "HB20", marca_id: 8, ano: 2019, preco: 48500, foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/05/esse1.jpg?quality=70&strip=info"},
      ]);
    });
};