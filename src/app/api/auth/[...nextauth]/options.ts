import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export const options:NextAuthOptions ={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"jon doe"
                },
                password:{
                    label:"Password:",
                    type:"password"
                }
            },
            async  authorize(credentials, req) {
                const user ={id:"1" ,name:"Roy", password:"roy"}
               if(credentials?.username === user.name && credentials?.password === user.password){
                return user

               } else{
                return null
               }
            },
        })        
    ]
}