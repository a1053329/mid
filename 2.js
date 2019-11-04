function BMI(height,weight){
    h=height/100;
    bmi=weight/(h*h);
    console.log(bmi.toFixed(1));
  }
BMI(178,70);