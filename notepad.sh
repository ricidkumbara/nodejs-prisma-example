# install jest unit test
npm install --save-dev jest @type/jest

# install babel 
npm install --save-dev babel-jest @babel/preset-env

# install prisma
npm install prisma --save-dev

# see all command prisma
npx prisma

# init prima
npx prisma init

# migrate without apply
# model-first migration
npx prisma migrate dev --create-only --name create_all_model

# execute migration
npx prisma migrate dev

# database-first migration
npx prisma db pull

# run prisma studio
npx prisma studio