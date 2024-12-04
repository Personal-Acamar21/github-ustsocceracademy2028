import { Handler } from '@netlify/functions';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const handler: Handler = async (event) => {
  try {
    const collection = event.path.split('/').pop();
    if (!collection) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Collection name is required' })
      };
    }

    const contentPath = join(process.cwd(), `content/${collection}`);
    const content = await readFile(contentPath, 'utf-8');
    
    return {
      statusCode: 200,
      body: content,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch ${event.path}` })
    };
  }
};