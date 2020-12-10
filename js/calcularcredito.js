$(document).ready(function(){
    $("#calcularc").click(function(){
        iphone=5000000;
        samsung=6000000;
        oppo=3800000;
        huawei=5800000;
        celular=$("#celular").val();
        cuotasCel=$("#cuotas").val();
        cuotaManejo=$("#cuotamanejo").val();
        calcinteres=0;
        valcuota=0;
        if(celular != "" && cuotasCel != "" && cuotaManejo != ""){
            // iphone
            if(celular == "iphone" && cuotasCel == "12" && cuotaManejo == "si"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*12)+iphone+120000).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "iphone" && cuotasCel == "12" && cuotaManejo == "no"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*12)+iphone).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "iphone" && cuotasCel == "24" && cuotaManejo == "si"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*24)+iphone+240000).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "iphone" && cuotasCel == "24" && cuotaManejo == "no"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*24)+iphone).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "iphone" && cuotasCel == "36" && cuotaManejo == "si"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*36)+iphone+360000).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }else if(celular == "iphone" && cuotasCel == "36" && cuotaManejo == "no"){
                calcinteres = iphone*0.01;
                totalapagar = ((calcinteres*36)+iphone).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            // samsung
            }else if(celular == "samsung" && cuotasCel == "12" && cuotaManejo == "si"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*12)+samsung+120000).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "samsung" && cuotasCel == "12" && cuotaManejo == "no"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*12)+samsung).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "samsung" && cuotasCel == "24" && cuotaManejo == "si"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*24)+samsung+240000).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "samsung" && cuotasCel == "24" && cuotaManejo == "no"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*24)+samsung).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "samsung" && cuotasCel == "36" && cuotaManejo == "si"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*36)+samsung+360000).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }else if(celular == "samsung" && cuotasCel == "36" && cuotaManejo == "no"){
                calcinteres = samsung*0.015;
                totalapagar = ((calcinteres*36)+samsung).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }
            // Oppo
            else if(celular == "oppo" && cuotasCel == "12" && cuotaManejo == "si"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*12)+oppo+120000).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "oppo" && cuotasCel == "12" && cuotaManejo == "no"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*12)+oppo).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "oppo" && cuotasCel == "24" && cuotaManejo == "si"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*24)+oppo+240000).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "oppo" && cuotasCel == "24" && cuotaManejo == "no"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*24)+oppo).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "oppo" && cuotasCel == "36" && cuotaManejo == "si"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*36)+oppo+360000).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }else if(celular == "oppo" && cuotasCel == "36" && cuotaManejo == "no"){
                calcinteres = oppo*0.008;
                totalapagar = ((calcinteres*36)+oppo).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }
            //Huawei
            else if(celular == "huawei" && cuotasCel == "12" && cuotaManejo == "si"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*12)+huawei+120000).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "huawei" && cuotasCel == "12" && cuotaManejo == "no"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*12)+huawei).toFixed(0);
                valcuota = (totalapagar/12).toFixed(0);
            }else if(celular == "huawei" && cuotasCel == "24" && cuotaManejo == "si"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*24)+huawei+240000).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "huawei" && cuotasCel == "24" && cuotaManejo == "no"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*24)+huawei).toFixed(0);
                valcuota = (totalapagar/24).toFixed(0);
            }else if(celular == "huawei" && cuotasCel == "36" && cuotaManejo == "si"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*36)+huawei+360000).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }else if(celular == "huawei" && cuotasCel == "36" && cuotaManejo == "no"){
                calcinteres = huawei*0.02;
                totalapagar = ((calcinteres*36)+huawei).toFixed(0);
                valcuota = (totalapagar/36).toFixed(0);
            }
            $("#menscelular").text("");
            $("#menscuotas").text("");
            $("#mensmanejo").text("");
            $("#valorcuota").text(valcuota);
            $("#totaldeuda").text(totalapagar);
            $("#valorcuota").html(new Intl.NumberFormat('es-MX').format(valcuota));
            $("#totaldeuda").html(new Intl.NumberFormat('es-MX').format(totalapagar));
        }else if(celular != "" && cuotasCel != "" && cuotaManejo == ""){
            $("#menscelular").text("");
            $("#menscuotas").text("");
            $("#mensmanejo").text("Selecciona si quieres agregar cuota de manejo");
        }else if(celular != "" && cuotasCel == "" && cuotaManejo != ""){
            $("#menscelular").text("");
            $("#menscuotas").text("Selecciona el plazo en cuotas");
            $("#mensmanejo").text("");
        }else if(celular != "" && cuotasCel == "" && cuotaManejo == ""){
            $("#menscelular").text("");
            $("#menscuotas").text("Selecciona el plazo en cuotas");
            $("#mensmanejo").text("Selecciona si quieres agregar cuota de manejo");
        }else if(celular == "" && cuotasCel != "" && cuotaManejo != ""){
            $("#menscelular").text("Selecciona uno de los celulares de la lista");
            $("#menscuotas").text("");
            $("#mensmanejo").text("");
        }else if(celular == "" && cuotasCel != "" && cuotaManejo == ""){
            $("#menscelular").text("Selecciona uno de los celulares de la lista");
            $("#menscuotas").text("");
            $("#mensmanejo").text("Selecciona si quieres agregar cuota de manejo");
        }else if(celular == "" && cuotasCel == "" && cuotaManejo != ""){
            $("#menscelular").text("Selecciona uno de los celulares de la lista");
            $("#menscuotas").text("Selecciona el plazo en cuotas");
            $("#mensmanejo").text("");
        }
        else if(celular == "" && cuotasCel == "" && cuotaManejo == ""){
            $("#menscelular").text("Selecciona uno de los celulares de la lista");
            $("#menscuotas").text("Selecciona el plazo en cuotas");
            $("#mensmanejo").text("Selecciona si quieres agregar cuota de manejo");
        }
            
            
            
            
            
    });
    $("#limpiar").click(function(){
        $("#celular").val(null).focus();
        $("#cuotas").val(null);
        $("#cuotamanejo").val(null);
        $("#valorcuota").text("");
        $("#totaldeuda").text("");
        $("#menscelular").text("");
        $("#menscuotas").text("");
        $("#mensmanejo").text("");
    });
});