import { retrieveGames } from '../../actions'

describe('tests games fetch call', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          date: '12-12-2012',
          json: () => {
            return { date: '12-12-2012' }
          }
        })
      })
      return p
    })
  })

  it('should return values', async () => {
    const response = await retrieveGames()
    console.log(response)
    expect(response.payload.date).toBe('12-12-2012')
  })
})
