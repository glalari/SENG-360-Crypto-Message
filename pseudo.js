

// 1. Confidentiality: Encrypting messages sent from the client to the server and vice versa 
//     Need to implement symmetric key encryption

// 2. Integrity: Checking integrity of the messages coming from client to the server and vice versa, such that no one in the middle can change or add some blocks to the exchanged messages 
//     With Digital signatures
        // maybe with (from jens) --- 
            //  You can ensure this by using message authentication codes (with AES) (see your question 5).

// 3. Authentication: Authenticating the origin of the messages coming from client or server in a way to make sure that messages have actually been sent by that party.
//     Needham scroeder public key protocol


// PSEUDO

public class client(){

    public start(args){
        if( args('-c').exists()){
            CONDFIDENTIALITY = true
        } else if( args('-i').exists() ){
            INTEGRITY = true
        } else if( args('-a').exists() ){
            AUTHENTICATION = true
        }

        var result = this.login();
        if(result){
            openSession();
        } else {
            // FAILED TO AUTH USER
            fail()
        }
    }

    public login(){
        // enter a username and password
        // compare it against a hashed password in the system
    }

    public openSession(){
        send("heyyyy baby");
        var response = wait()

        if( AUTHENTICATION ){
            // expect a json object of the form
        }

        // i expect the needham schroeder protocol
        // i.e. a json object that has a "identity, nonce component"
        // A->B : {A,Na}pk_b
        // B->A : {Na,Nb, B}pk_A
        // A->B : {Nb}pk_b


    }
}