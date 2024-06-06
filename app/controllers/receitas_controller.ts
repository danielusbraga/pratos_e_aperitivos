import { HttpContext } from '@adonisjs/core/http'
import Receita from '#models/receita'
import Avaliacao from '#models/avaliacao'
import Comentario from '#models/comentario'
import { ReceitaValidator } from '#validators/receita'
import ReceitaIngrediente from '#models/receita_ingrediente'




export default class ReceitasController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Receita.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Receita.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = await request.validate({ schema: ReceitaValidator })
    return await Receita.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const receita = await Receita.findOrFail(params.id)
    const dados = await request.validate({ schema: ReceitaValidator })
    receita.merge(dados)
    await receita.save()
    return receita
  }

  async destroy({ params }: HttpContext) {
    const receita = await Receita.findOrFail(params.id)

    await Avaliacao.query().where('receita_id', receita.id).delete()
    await Comentario.query().where('receita_id', receita.id).delete()
    await ReceitaIngrediente.query().where('receita_id', receita.id).delete()

    await receita.delete()

    return { msg: 'Registro deletado com sucesso', receita }
  }
}