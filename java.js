const circle = document.getElementById(`circle`)
const button = document.getElementById(`button`)



button.addEventListener(`click`, () =>{
    if(button.textContent==`Cambiar a rojo`){
        circle.classList.add(`red`)
        button.textContent = `Cambiar a azul`
    }else if(button.textContent==`Cambiar a azul`){
        circle.classList.remove(`red`)
        button.textContent = `Cambiar a rojo`
    }
})

/*
git init; git crea internamente las dos instancias que tiene.

git add "nombre_de_archivo"; git agrega en la instancia de ensayo el archivo.
                            podemos usar git add --all asi agregar todo el proyecto a ensayo.

git commit -m "name_a_file"; git agrega todo lo que esta en ensayo al repositorio local
                            con el nombre que le indiquemos.


git status -s; con este comando podemos ver el estado actual de nuestros archivos. Si un archivo
                esta en el proyecto pero esta en loca no aparece a menos que este en local
                y le hallamos hecho modificaciones; pues lo mostrarian en el estado en rojo
                por haber sido modificado y no guardado en local.

-----------------------------------------------------------------------------------------------

si no inicio el proyecto de git (git init) al intentar poner algun comando no funciona.

Con git init:

Al iniciar el proyecto de git los archivos en el VSCode aparecen con una letra U; 
(ver bien que significa).

Al colocar git status -s; en git here los archivos se encuentran con dos signos de pregunta 
rojos en cada uno (??).


                        Luego con git add "name_file":

Al seguir un archivo; en este caso index.html; pasa al area de ensayo.
Al colocar luego git status -s; el estado de los archivos no seguidos hasta el momento es (??) 
como habias dicho; pero al archivo particular de index.html esta con una A en verda; que 
representaria que este archivo esta en area  de ensayo.(Esta A tambien se le coloca en el 
nombre del archivo en el VSCode).

Curioso: 

En este punto al modificar el archivo guardado en el area de ensayo; al ver el estado 
despues de ser modificado aparece con la misma A pero tambien con una letra M en roja; esto 
se refleja en VSCode poniendole al archivo una letra M. (M traducilo en este caso como: esta 
en area de ensayo pero no se guasrdaron los cambios recientes).

                        Con git commit -m "name_proyect";

Al guardar con este comando todo lo de area de ensayo a repositorio local; el archivo/s no 
aparecen ya en git status -s y ademas en VSCode la/s letras de ese archivo/s desaparecen como 
si git ya no le diera importancia.
Si hacemos cambios en el archivo aparece una letra M; ()

IMPORTANTE! Si es la primera vez que usas commit con git te pide contraseña y correo; para asignarlos usas estos dos comandos;

1)  git config --global user.name "My Name"     

2)  git config --global user.email "myemail@example.com"

Si por alguna razon en algun momento necesitas saber el nombre o correo introducidos ejecutas 
los mismos comandos pero sin el nombre en caso de 1) y el email en caso de 2).

SIEMPRE QUE QUEREMOS PASAR UN ARCHIVO A COMMIT DEBE PASAR POR AREA DE ENSAYO; SI NO NO SE PUEDE 
Y SALTA ERROR A PESAR DE QQUE ESE ARCHIVO YA ESTE EN COMMIT Y QUERRAMOS GUARDAR ESOS CAMBIOS. 
Esa M que estaba en rojo porque se habia modificado el commit (esa M representa modificacion de 
commit pues la M no esta con la A); si la agregamos a el area de ensayo es una M pero ahora en 
verde; pues indica que es un archivo que guardamos en commit pero que ahora tiene nuevos
cambios y esta guardado en el area de ensayo (git add "name_file")



Tengo tantos archivos guardados en repositorio local como commit ejecutados; 
¿Como vemos el listado de lo que tenemos en repositorio local?

                        Comando; git log --oneline

¿Como restauro el proyecto en una de las instantaneas (guardados en repositorio local);

Comando; git reset --hard "codigo_de_instantane"; El codigo de la instamntane lo podemos ver 
en lista de reposirotio local.


IMPORTANTE! Si tengo mas de una instantanea y vuelvo a una que la hice primero que otra; la instantane posteriores se
borran.

*/