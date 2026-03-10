interface User {
  id: number;
  name: string;
  role: string;
}

const greetUser = (user: User): string => {
  return `Halo ${user.name}, selamat belajar Git dengan TypeScript! Role kamu: ${user.role}.`;
};

const me: User = {
  id: 1,
  name: "Developer",
  role: "Software Engineer"
};

console.log(greetUser(me));