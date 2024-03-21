import { FastifyRequest, FastifyReply } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply){
    
    await request.jwtVerify({
        onlyCookie: true // verifica que o usuario esta autenticado mas nao olha para informacao que esta no Authorization, mas sim olhar para os cookies da requisicao, para ver se nos cookies existe o refreshToken
    })
    // se daqui para baixo o codigo continuar significa dizer que o refresh existe e que ele eh valido

    const { role } = request.user

    const token = await reply.jwtSign(
        {
          role
        },
        {
          sign: {
            sub: request.user.sub,
          }
       })

     const refreshToken = await reply.jwtSign(
      {
        role
      },
      {
        sign: {
          sub: request.user.sub,
          expiresIn: '7d'
        }
     })

     return reply
     .setCookie('refreshToken', refreshToken, {
      path: '/',
      secure: true, // HTTPS
      sameSite: true,
      httpOnly: true // saved in the context of the site not via browser
     })
     .status(200)
     .send({
      token
     })

  }