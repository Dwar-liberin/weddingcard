
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "wedding card",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const logo_88825fc1_7c1488825_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_88825fc1_7c1488825_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_88825fc1_7c1488825_image = new THREE.MeshBasicMaterial({
      map: logo_88825fc1_7c1488825_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_88825fc1_7c1488825 = new THREE.Mesh(logo_88825fc1_7c1488825_iconGeometry, logo_88825fc1_7c1488825_image);
    logo_88825fc1_7c1488825.scale.set(0.3, 0.3, 0.3);
    logo_88825fc1_7c1488825.position.set(0.517, -0.6, 0);
    logo_88825fc1_7c1488825.rotation.set(-0.001, 0, 0);
    logo_88825fc1_7c1488825.userData.clickable = true
    
    logo_88825fc1_7c1488825.userData.eventName ="Call"
const image_099fbf8c_530196c0_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_099fbf8c_530196c0_texture = await loadTexture("assets/osunio-circular-logo.png");
  const image_099fbf8c_530196c0_image = new THREE.MeshBasicMaterial({
      map: image_099fbf8c_530196c0_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_099fbf8c_530196c0 = new THREE.Mesh(image_099fbf8c_530196c0_iconGeometry, image_099fbf8c_530196c0_image);
    image_099fbf8c_530196c0.scale.set(0.3, 0.3, 0.3);
    image_099fbf8c_530196c0.position.set(0.01, -0.6, 0);
    image_099fbf8c_530196c0.rotation.set(-0.001, 0, 0);
    image_099fbf8c_530196c0.userData.clickable = true
    
    image_099fbf8c_530196c0.userData.eventName ="OsuniO"
const image_7cdc5bf2_66885753_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_7cdc5bf2_66885753_texture = await loadTexture("assets/location-icon (2).png");
  const image_7cdc5bf2_66885753_image = new THREE.MeshBasicMaterial({
      map: image_7cdc5bf2_66885753_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_7cdc5bf2_66885753 = new THREE.Mesh(image_7cdc5bf2_66885753_iconGeometry, image_7cdc5bf2_66885753_image);
    image_7cdc5bf2_66885753.scale.set(0.3, 0.3, 0.3);
    image_7cdc5bf2_66885753.position.set(-0.48, -0.6, 0);
    image_7cdc5bf2_66885753.rotation.set(-0.001, 0, 0);
    image_7cdc5bf2_66885753.userData.clickable = true
    
    image_7cdc5bf2_66885753.userData.eventName ="Location"
const image_3bdc93ea_62d3f709_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_3bdc93ea_62d3f709_texture = await loadTexture("assets/location-icon.png");
  const image_3bdc93ea_62d3f709_image = new THREE.MeshBasicMaterial({
      map: image_3bdc93ea_62d3f709_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_3bdc93ea_62d3f709 = new THREE.Mesh(image_3bdc93ea_62d3f709_iconGeometry, image_3bdc93ea_62d3f709_image);
    image_3bdc93ea_62d3f709.scale.set(0.4, 0, 1);
    image_3bdc93ea_62d3f709.position.set(-0.448, -0.719, -0.042);
    image_3bdc93ea_62d3f709.rotation.set(-0.001, 0, 0);
    
    
    
const target_imageweddin86aa2_iconGeometry = new THREE.PlaneGeometry(1, 0.7093821510297483);
   const target_imageweddin86aa2_texture = await loadTexture("assets/wedding-invite-marker.png");
  const target_imageweddin86aa2_image = new THREE.MeshBasicMaterial({
      map: target_imageweddin86aa2_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageweddin86aa2 = new THREE.Mesh(target_imageweddin86aa2_iconGeometry, target_imageweddin86aa2_image);
    target_imageweddin86aa2.scale.set(1, 1, 1);
    target_imageweddin86aa2.position.set(0.01, -0.01, 0.01);
    target_imageweddin86aa2.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_6376485097f_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_6376485097f_Item0Video = await loadVideo("assets/wedding invite.mp4");

    const video_asset_6376485097f_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_6376485097f_Item0Video
    );

    let video_asset_6376485097f_Item0VideoMaterial

      video_asset_6376485097f_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_6376485097f_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_6376485097f = new THREE.Mesh(
      video_asset_6376485097f_planeGeometry,
      video_asset_6376485097f_Item0VideoMaterial
    );

  video_asset_6376485097f.position.set(0.02, -0.012, 0);



  if (isIOS) {
    video_asset_6376485097f_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_6376485097f_Item0Video.loop=true;
  
  video_asset_6376485097f.scale.set(1.3, 1.3, 1.3);

    video_asset_6376485097f.rotation.set(-0.001, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_6376485097f_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_88825fc1_7c1488825) {
        setTimeout(()=>{
          window.location.href = "tel:098990 75547"
        },100)
        }
      

      if (o.userData.clickable && o === image_099fbf8c_530196c0) {
        setTimeout(()=>{
          window.location.href = "https://dl.osunio.com/xbn1"
        },100)
        }
      

      if (o.userData.clickable && o === image_7cdc5bf2_66885753) {
        setTimeout(()=>{
          window.location.href = "https://www.google.com/maps/place/Grand+Hyatt+Mumbai+Hotel+%26+Residences/@19.0768067,72.8485499,17z/data=!3m2!4b1!5s0x3be7c901986a412b:0xb9445e47b5e34aa2!4m19!1m9!4m8!1m0!1m6!1m2!1s0x3be7c902003fc289:0x40308b1e806bc1ac!2sBandra+Kurla+Complex,+Siddharath+Nagar,+Vakola,+Vicinity,+Mumbai,+Maharashtra+400055!2m2!1d72.8511248!2d19.0768067!3m8!1s0x3be7c902003fc289:0x40308b1e806bc1ac!5m2!4m1!1i2!8m2!3d19.0768067!4d72.8511248!16s%2Fm%2F01097_nt?entry=ttu"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(logo_88825fc1_7c1488825)
anchor.group.add(image_099fbf8c_530196c0)
anchor.group.add(image_7cdc5bf2_66885753)
anchor.group.add(image_3bdc93ea_62d3f709)

anchor.group.add(video_asset_6376485097f)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            






     
      video_asset_6376485097f_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_6376485097f_Item0Video.pause();

        





    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    