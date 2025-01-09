const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding pantries...');

  const pantries = [
    { name: 'Central Pantry', location: 'Floor 1' },
    { name: 'East Wing Pantry', location: 'Floor 1' },
    { name: 'West Wing Pantry', location: 'Floor 2' },
    { name: 'South Pantry', location: 'Floor 2' },
    { name: 'North Pantry', location: 'Floor 3' },
  ];

  for (const pantry of pantries) {
    await prisma.pantry.create({
      data: pantry,
    });
  }

  console.log('Pantries seeded successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
