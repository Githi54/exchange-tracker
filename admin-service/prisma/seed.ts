import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log('Seeding database...');

  const user1 = await prisma.user.create({
    data: {
      nickname: 'JohnDoe',
      Rule: {
        create: [
          {
            currencyA: 'USD',
            currencyB: 'EUR',
            percentage: 2.5,
            period: 60,
            isPopular: true,
          },
          {
            currencyA: 'GBP',
            currencyB: 'USD',
            percentage: -1.2,
            period: 30,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      nickname: 'JaneSmith',
      Rule: {
        create: [
          {
            currencyA: 'CAD',
            currencyB: 'JPY',
            percentage: 3.0,
            period: 120,
          },
        ],
      },
    },
  });

  const user3 = await prisma.user.create({
    data: {
      nickname: 'Alice',
    },
  });

  console.log('Seeded Users:', { user1, user2, user3 });
}

const main = async () => {
  try {
    seed();
    await prisma.$disconnect();
    console.log('Seeding complete.');
  } catch (error) {
    console.error('Error during seeding:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
