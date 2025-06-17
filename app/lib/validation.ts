export function validateTaskTitle(title: string): { isValid: boolean; error?: string } {
  if (!title || typeof title !== 'string') {
    return { isValid: false, error: 'Task title is required' };
  }

  const trimmedTitle = title.trim();
  
  if (trimmedTitle.length === 0) {
    return { isValid: false, error: 'Task title cannot be empty' };
  }

  if (trimmedTitle.length > 200) {
    return { isValid: false, error: 'Task title must be less than 200 characters' };
  }

  // Basic XSS protection - remove HTML tags
  if (/<[^>]*>/g.test(trimmedTitle)) {
    return { isValid: false, error: 'HTML tags are not allowed in task titles' };
  }

  return { isValid: true };
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>&"']/g, (char) => {
      // Escape special characters to HTML entities
      const escapeMap: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;',
      };
      return escapeMap[char] || char;
    });
}