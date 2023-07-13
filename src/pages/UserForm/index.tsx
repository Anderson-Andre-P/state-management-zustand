import React from "react";
import useUserStore from "../../stores/user";

const UserForm = () => {
  const addUser = useUserStore((state) => state.addUser);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;

    addUser({
      name,
      email,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Digite seu nome" required />
        <input name="email" placeholder="Digite seu e-mail" required />
        <button type="submit">Criar usuário</button>
      </form>
    </div>
  );
};

export default UserForm;
