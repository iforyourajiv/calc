<?php
session_start();
if (empty($_SESSION['temp'])) {
    $_SESSION['temp'] = array();
}

    $number=(int)$_POST['number'];
    $opt=$_POST['opt'];
    $result=array();


    function add($a1,$a2) {
        return $a1 + $a2;
     }

     function sub($a1,$a2) {
        return  $a1-$a2;
     }

     function div($a1,$a2) {
        return $a1/$a2;
     }

        if($opt=="+") {
            array_push($_SESSION['temp'],$number);
            $z=$_SESSION['temp'];
            $result=(array_reduce($z,"add"));
            $_SESSION['temp']=array();
            array_push($_SESSION['temp'],$result);
            echo $result;
        }

        if($opt=="-") {
            array_push($_SESSION['temp'],$number);
            $z=$_SESSION['temp'];
            $result=(array_reduce($z,"sub"));
            $_SESSION['temp']=array();
            array_push($_SESSION['temp'],$result);
            echo $result;
        }

        if($opt=="*") {
            array_push($_SESSION['temp'],$number);
            $z=$_SESSION['temp'];
            $total=1;
           foreach($z as $element){
            $total=$total * $element;
           }
            $_SESSION['temp']=array();
            array_push($_SESSION['temp'],$total);
            echo $total;
        }

        if($opt=="/") {
            array_push($_SESSION['temp'],$number);
                $z=$_SESSION['temp'];
                $total=1;
                foreach($z as $element){
                    if($element<=0){
                      
                        $total=0;
                        break;
                    } else{
                        $total =$total/$element;
                        $_SESSION['temp']=array();
                        array_push($_SESSION['temp'],$total);      
                    }
                    
                   
                   }
                   echo $total;
                 
               
    
          
        }

        if($opt=="AC"){
            session_destroy();
        }
    
        if(isset($_POST["action"])){
            if($_POST["action"]=="refresh"){
            session_destroy();
            }
            }






?>
