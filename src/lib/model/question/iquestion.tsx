export interface iQuestion{
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