import {prismaClient} from '../src/prisma-client.js'

// describe("Prisma Client", () => {
// 	it('should be able to execute sql', async () => {
// 		const id = '1'
// 		const samples = await prismaClient.$queryRaw`select * from sample where id = ${id}`

// 		for (const sample of samples) {
// 			console.log(sample.id, sample.name)
// 		}
// 	})
// })