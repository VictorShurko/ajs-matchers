export default function usersSort(users) {
    return users.sort(function(a,b){
        return b.health - a.health;
    });
}