const app = require('../app')
const request = require('supertest')

describe('Todo Routes', () => {
    it('should return todos get /todos', (done) => {
        request(app)
            .get('./todos')
            .expect(200)
            .then(response => {
                const firstData = response.body[0]
                expect(firstData.tittle).toBe('belajar sequelize')
            })
            .catch(done)
    })
    it('should create todos /todos', (done) => {
        request(app)
            .post('./todos').send(
                {
                    tittle: 'belajar lagi',
                    status: 'active'
                }
            )
            .expect(201)
            .then(response => {
                const data = response.body
                expect(data.tittle).toBe('belajar lagi')
                expect(data.status).toBe('active')
                done()
            })
            .catch(done)
    })
})