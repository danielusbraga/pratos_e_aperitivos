import { DateTime } from 'luxon'
import { BaseModel , column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany} from '@adonisjs/lucid/types/relations'
import Ingrediente from './ingrediente.js'


export default class ReceitaIngrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare quantidade: number
  
  @column()
  declare unidade_medida: number

  @column()
  declare receita_id: number
  
  @column()
  declare ingrediente_id: number
  
  
  @manyToMany(()=>Ingrediente, {
    pivotTable: 'ingrediente'
  })
  declare ingredientes: ManyToMany<typeof Ingrediente>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

