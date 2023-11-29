import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

describe('Create Gym Use Case', () => {

  let gymsRepository: InMemoryGymsRepository
  let sut: CreateGymUseCase

  beforeEach(()=>{
    gymsRepository = new InMemoryGymsRepository
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    
    const { gym } = await sut.execute({
      title: 'John Doe',
      description: '',
      phone: '23',
      latitude: 0,
      longitude: 0
    })


    expect(gym.id).toEqual(expect.any(String))
  })
})