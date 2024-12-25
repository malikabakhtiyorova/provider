import { z } from 'zod'
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'

extendZodWithOpenApi(z)

export const CreateMovieSchema = z
  .object({
    id: z
      .number()
      .int()
      .optional()
      .openapi({ example: 1, description: 'MovieID' }),
    name: z
      .string()
      .min(1)
      .openapi({ example: 'Inception', description: 'Movie name' }),
    year: z
      .number()
      .int()
      .min(1900)
      .max(2024)
      .openapi({ example: 2020, description: 'Movie year' }),
    rating: z.number().openapi({ example: 7.5, description: 'Movie rating' }),
  })
  .openapi('CreateMovieRequest')

export const CreateMovieResponseSchema = z.object({
  status: z.number().int().openapi({ example: 200, description: 'Movie status' }),
  data: z.object({
    id: z.number().int().openapi({ example: 1, description: 'id' }),
    name: z.string().openapi({ example: 'Inception', description: 'name' }),
    year: z.number().openapi({ example: 2020, description: 'year' }),
    rating: z.number().openapi({ example: 7.5, description: 'rating' }),
  }),
  error: z.string().optional().openapi({ description: 'Error message' })
}).openapi('CreateMovieResponse')

export const ConflictMovieResponseSchema = z.object({
  status: z.number().int().openapi({ example: 409, description: 'Movie status' }),
  error: z.string().openapi({ example: 'Movie exists', description: 'Error message' })
})

const movieObject = {
  id: z.number().openapi({ example: 409, description: 'Movieid' }),
  name: z.string().openapi({ example: 'Inception', description: 'Movie name' }),
  year: z.number().openapi({ example: 2020, description: 'Movie year' }),
  rating: z.number().openapi({ example: 7.5, description: 'Movie rating' }),
}

export const GetMovieResponseSchema = z.object({
  status: z
    .number()
    .int()
    .openapi({ example: 200, description: 'Movie status' }),
  data: z.union([
    z.object(movieObject).nullable().openapi({ description: 'movie details', example: { id: 1, name:'sd', year: 202, rating: 6.7 } }),
    z.array(z.object(movieObject)).openapi({ description: 'movie details', example:[] })
  ]),
  error: z
    .string()
    .nullable()
    .optional()
    .openapi({ example: null, description: 'Error message' }),
}).openapi('GetMovieResponse')

export const MovieNotFoundResponseSchema = z.object({
  status: z.number().int().openapi({ example: 404, description: 'status code' }),
  error: z.string().openapi({ example: 'Movie not found', description: 'Error message' })
})

export const DeleteMovieResponseSchema = z.object({
  status: z.number().int().openapi({ example: 200, description: 'status code' }),
  message: z.string().openapi({ example: 'string', description: 'Error message' })
})

export const UpdateMovieSchema = z.object({
  id: z.number().int().openapi({ example: 1, description: 'Movie ID' }),
  name: z.string().min(1).openapi({ example: 'Inception', description: 'Movie name' }),
  year: z.number().int().min(1900).max(2024).openapi({ example: 2020, description: 'Movie year' }),
  rating: z.number().openapi({ example: 7.5, description: 'Movie rating' })
}).openapi('UpdateMovieRequest')

export const UpdateMovieResponseSchema = z
  .object({
    status: z
      .number()
      .int()
      .openapi({ example: 200, description: 'Movie status' }),
    error: z
      .string().optional()
      .openapi({
        example: 'Movie updated not successfully',
        description: 'error',
      }),
    data: z.object({
      id: z.number().int().openapi({ example: 1, description: 'id' }),
      name: z.string().openapi({ example: 'Inception', description: 'name' }),
      year: z.number().openapi({ example: 2020, description: 'year' }),
      rating: z.number().openapi({ example: 7.5, description: 'rating' }),
    }),
  })
  .openapi('UpdateMovieResponse')
