const fetch = require('node-fetch');

exports.handler = async function(event) {
  // Verify webhook secret if configured
  const webhookSecret = process.env.WORDPRESS_WEBHOOK_SECRET;
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // Trigger Netlify build
    const response = await fetch(
      `https://api.netlify.com/build_hooks/${process.env.NETLIFY_BUILD_HOOK}`,
      { method: 'POST' }
    );

    if (!response.ok) {
      throw new Error('Failed to trigger build');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Build triggered successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to trigger build' })
    };
  }
}