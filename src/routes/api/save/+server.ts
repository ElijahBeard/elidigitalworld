import { writeFile } from 'fs/promises';
import path from 'path';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  const file = data.get('drawing');

  if (!(file instanceof File)) {
    return json({ error: 'Missing or invalid file' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filename = `drawing-${Date.now()}.png`;
  const filepath = path.resolve('static/uploads', filename);

  await writeFile(filepath, buffer);
  return json({ filename });
};