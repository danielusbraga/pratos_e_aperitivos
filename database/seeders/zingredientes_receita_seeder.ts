import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ReceitaIngrediente from '#models/receita_ingrediente'

export default class extends BaseSeeder {
  async run() {
    await ReceitaIngrediente.createMany([
      {
        nome: 'Tomate Picado',
        quantidade: 2,
        unidade_medida: 1, 
        receita_id: 1,
        ingrediente_id: 1,
      },
      {
        nome: 'Queijo Ralado',
        quantidade: 200,
        unidade_medida: 2, 
        receita_id: 1,
        ingrediente_id: 2,
      },
     /* {
        nome: 'Carne Moída',
        quantidade: 500,
        unidade_medida: 2, 
        receita_id: 20,
        ingrediente_id: 30,
      },
 */
    ])
  }
}