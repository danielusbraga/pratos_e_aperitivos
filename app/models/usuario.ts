import { DateTime } from 'luxon'
import { BaseModel,  column, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany} from '@adonisjs/lucid/types/relations'
import Avaliacao from './avaliacao.js'
import Comentario from './comentario.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare senha: string


  @hasMany(()=>Avaliacao)
  declare avaliacao: HasMany<typeof Avaliacao>

  @hasMany(()=>Comentario)
  declare comentario: HasMany<typeof Comentario>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}