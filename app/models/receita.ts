import { DateTime } from 'luxon'
import { BaseModel, belongsTo , column, manyToMany , hasMany} from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany, HasMany} from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'
import Ingrediente from './ingrediente.js'
import Avaliacao from './avaliacao.js'
import Comentario from './comentario.js'

export default class Receita extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare instrucoes: string

  @column()
  declare tempo_de_preparo: number
  
  @column()
  declare num_porcoes: number

  @column()
  declare categoria_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Categoria)
  declare categorias: BelongsTo<typeof Categoria>

  @manyToMany(()=>Ingrediente, {
    pivotTable: 'receita_ingredientes'
  })
  declare ingredientes: ManyToMany<typeof Ingrediente>

  @hasMany(()=>Avaliacao)
  declare avaliacao: HasMany<typeof Avaliacao>

  @hasMany(()=>Comentario)
  declare comentario: HasMany<typeof Comentario>

}