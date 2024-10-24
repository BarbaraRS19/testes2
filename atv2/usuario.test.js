const { addUser, getUser, countActiveUsers } = require('./usuario');

test('adicionar um usuário e recuperar suas informações', () => {
    const user = { id: 1, name: 'Bruna', active: true };
    addUser(user);

    const retrievedUser = getUser(1);
    expect(retrievedUser).toEqual(user);
});

test('contar o número total de usuários ativos', () => {
    const user1 = { id: 1, name: 'Bruna', active: true };
    const user2 = { id: 2, name: 'Luiz', active: false };
    const user3 = { id: 3, name: 'Loiuse', active: true };
    
    addUser(user1);
    addUser(user2);
    addUser(user3);
    
    expect(countActiveUsers()); 
});
