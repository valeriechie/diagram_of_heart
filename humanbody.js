

$(document).ready(function() {

  $("#svg666").click(function(evt) {
    switch(evt.target.id) {
      case "inferior_vena_cava":
        $("#info").html("The inferior vena cava (IVC) is a large vein that carries deoxygenated blood from the lower body back to the heart's right atrium");
        break;
      case "pulmonary_vein_2":
        $("#info").html("Pulmonary veins are a set of four veins that carry oxygenated blood from the lungs to the heart's left atrium. Each lung has two pulmonary veins that exit through the lung's hilum, or root, and then converge into a single vein that empties into the left atrium.");
        break;
      case "left_ventricle":
        $("#info").html("The left ventricle is one of the heart's four chambers and is responsible for pumping oxygenated blood to the body's tissues");
        break;
      case "pulmonary_vein_1":
        $("#info").html("Pulmonary veins are a set of four veins that carry oxygenated blood from the lungs to the heart's left atrium. Each lung has two pulmonary veins that exit through the lung's hilum, or root, and then converge into a single vein that empties into the left atrium.");
        break;
      case "left_atrium":
        $("#info").html("The left atrium is one of the four chambers of the heart, located at its base and at the back. It receives oxygenated blood from the lungs via the pulmonary veins and then pumps it into the left ventricle. The left ventricle then delivers the blood to the body through the aorta.");
        break;
      case "right_ventricle":
        $("#info").html("The right ventricle (RV) is one of the four chambers of the heart that pumps oxygen-poor blood from the heart to the lungs, where it's oxygenated and carbon dioxide is removed.");
        break;
      case "right_atrium":
        $("#info").html("The right atrium receives blood low in oxygen from the body and then empties the blood into the right ventricle.");
        break;
      case "pulmonary_artery_2":
        $("#info").html("The pulmonary arteries are blood vessels that carry oxygen-poor blood from the right side of the heart to the lungs.");
        break;
      case "aorta":
        $("#info").html("The aorta is the body's largest artery, transporting oxygen-rich blood from the heart to the rest of the body. It extends from the left ventricle of the heart, up into the chest to form an arch, and then down to the L4 vertebral level.");
        break;
      case "superior_vena_cava":
        $("#info").html("The superior vena cava (SVC) is a large vein that returns deoxygenated blood from the upper body to the right atrium of the heart.");
        break;
      case "pulmonary_artery_1":
        $("#info").html("The pulmonary arteries are blood vessels that carry oxygen-poor blood from the right side of the heart to the lungs.");
        break;
      case "tricuspid_valve_1":
        $("#info").html("Specifically, the function of the tricuspid valve, also called the right atrioventricular valve, is to control the flow of blood from your heart's top chamber (right atrium) to the bottom chamber (right ventricle).");
        break;
      case "tricuspid_valve_2":
        $("#info").html("Specifically, the function of the tricuspid valve, also called the right atrioventricular valve, is to control the flow of blood from your heart's top chamber (right atrium) to the bottom chamber (right ventricle).");
        break;
      case "mitral_valve_1":
        $("#info").html("The mitral valve is one of four valves in the heart. It regulates blood flow from the upper left chamber (left atrium) into the lower left chamber (left ventricle).");
        break;
      case "mitral_valve_2":
        $("#info").html("The mitral valve is one of four valves in the heart. It regulates blood flow from the upper left chamber (left atrium) into the lower left chamber (left ventricle).");
        break;
      case "pulmonary_valve_1":
        $("#info").html("The pulmonary valve is a heart valve that regulates blood flow between the right ventricle and the pulmonary artery, allowing deoxygenated blood to flow to the lungs.");
        break;
      case "pulmonary_valve_2":
        $("#info").html("The pulmonary valve is a heart valve that regulates blood flow between the right ventricle and the pulmonary artery, allowing deoxygenated blood to flow to the lungs.");
        break;
      case "aortic_valve_1":
        $("#info").html("The aortic valve is one of four valves in the heart that helps blood flow in the right direction. It's located between the left ventricle and the aorta, and is also called the aortic semilunar valve because of its shape.");
        break;
      case "aortic_valve_2":
        $("#info").html("The aortic valve is one of four valves in the heart that helps blood flow in the right direction. It's located between the left ventricle and the aorta, and is also called the aortic semilunar valve because of its shape.");
        break;
      default:
        break;
    }
  });

});
