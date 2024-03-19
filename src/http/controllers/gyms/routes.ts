import { FastifyInstance } from 'fastify'
import { verifyJWT } from '../../hooks/verify-jwt'



export async function gymsRoutes(app: FastifyInstance){
    app.addHook('onRequest', verifyJWT)

    
}