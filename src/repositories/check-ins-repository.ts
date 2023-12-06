import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInsRepository{

    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
    findManyByUserId(user: string, page: number): Promise<CheckIn[]>
    countByUserId(userId: string): Promise<number>
}