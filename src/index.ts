import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createStudent() {
    const student = await prisma.student.create({
        data: {
            name: "Maria",
            email: "maria@lexicon.se",
        },
    });
    console.log(student);
}

async function addCourse() {
    const course = await prisma.course.create({
        data: {
            name: "Programming",
            teacherId: "clxmxzarc0001wiwypqpqbtyh",
        },
    });
    console.log(course);
}

async function addStudentToCourse() {
    const course = await prisma.course.findUnique({
        where: {
            id: "clxmyi1u3000131w1b8auief2",
        },
    });
    const student = await prisma.student.findUnique({
        where: {
            id: "clxmye3z30000yw610yd8ojrg",
        },
    });
    await prisma.course.update({
        where: {
            id: course?.id,
        },
        data: {
            students: {
                connect: {
                    id: student?.id,
                },
            },
        },
    });
}

addStudentToCourse();


