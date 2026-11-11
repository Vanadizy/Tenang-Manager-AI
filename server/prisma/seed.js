import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { prisma } from '../src/config/prisma.js';

try {
  const email = process.env.OWNER_EMAIL || 'owner@example.com';
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: {
        name: process.env.OWNER_NAME || 'Property Owner',
        email,
        passwordHash: await bcrypt.hash(process.env.OWNER_PASSWORD || 'ChangeMe123!', 12),
      },
    });
    console.log('Owner user created:', email);
  } else {
    console.log('Owner already exists:', email);
  }
} finally {
  await prisma.$disconnect();
}
