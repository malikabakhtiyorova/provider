import type { z } from 'zod'

import type {
  CreateMovieResponseSchema,
  ConflictMovieResponseSchema,
  CreateMovieSchema,
  GetMovieResponseSchema,
  MovieNotFoundResponseSchema,
  DeleteMovieResponseSchema,
  UpdateMovieResponseSchema,
  UpdateMovieSchema
} from './schema.ts'

export type CreateMovieRequest = z.infer<typeof CreateMovieSchema>

export type GetMovieResponseSchema = z.infer<typeof GetMovieResponseSchema>

export type ConflictMovieResponseSchema = z.infer<typeof ConflictMovieResponseSchema>

export type CreateMovieResponseSchema = z.infer<typeof CreateMovieResponseSchema>

export type MovieNotFoundResponseSchema = z.infer<typeof MovieNotFoundResponseSchema>

export type DeleteMovieResponseSchema = z.infer<typeof DeleteMovieResponseSchema>

export type UpdateMovieResponseSchema = z.infer<typeof UpdateMovieResponseSchema>

export type UpdateMovieRequest = z.infer<typeof UpdateMovieSchema>
