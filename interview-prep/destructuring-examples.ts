// Advanced Destructuring Patterns - Interview Questions

// 1. Nested destructuring with renaming
const user = {
  id: 1,
  profile: {
    name: 'John',
    contact: {
      email: 'john@example.com'
    }
  }
};

// Extract email and rename it
const { profile: { contact: { email: userEmail } } } = user;

// 2. Array destructuring with rest
const [first, second, ...remaining] = [1, 2, 3, 4, 5];

// 3. Function parameter destructuring with defaults
interface ApiResponse {
  data?: any[];
  status?: number;
  message?: string;
}

function processResponse({ 
  data = [], 
  status = 200, 
  message = 'Success' 
}: ApiResponse = {}) {
  return { data, status, message };
}

// 4. Swapping variables (classic interview question)
let a = 1, b = 2;
[a, b] = [b, a];

// 5. Destructuring in loops (GraphQL context)
const users = [
  { id: 1, name: 'John', email: 'john@test.com' },
  { id: 2, name: 'Jane', email: 'jane@test.com' }
];

for (const { id, name } of users) {
  console.log(`User ${id}: ${name}`);
}

// 6. Dynamic property destructuring
function extractField(obj: Record<string, any>, field: string) {
  const { [field]: value } = obj;
  return value;
}

export { processResponse, extractField };