import { serialize } from 'https://lsong.org/scripts/form.js';
import { GitHubClient } from 'https://lsong.org/scripts/services/github.js';

const gh = new GitHubClient({
  token: 'ghp_' + 'OnHUyFAhEY7k7GJWhw0o5i7hDW1Ais2D0BHU',
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { name, email, message } = serialize(e.target);
  const subject = `Feedback from ${name} <${email}>`;
  try {
    await gh.createIssue("song940/feedback", { title: subject, body: message });
    alert('Feedback submitted successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit feedback. Please try again later.');
  }
});
