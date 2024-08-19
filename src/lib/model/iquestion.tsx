export interface iQuestion{
    _id: string,
    question: string,
    docs: string,
    tags: string[],
    notes: string[],
    difficulty: difficultyLevel
}

export enum difficultyLevel{
    "beginner",
    "intermediate",
    "advance"
}