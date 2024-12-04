import { Handler } from '@netlify/functions';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async () => {
  try {
    const programsPath = join(process.cwd(), 'content/programs');
    const programs = await readFile(programsPath, 'utf-8');
    
    return {
      statusCode: 200,
      body: JSON.stringify(JSON.parse(programs)),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch programs' }),
    };
  }
};