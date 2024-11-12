import React, { useState } from 'react';

import Avatar, { Piece } from 'avataaars';
import { avatarOptions } from '../../../../helper/avatar';
function TSetting() {


  const [avatarConfig, setAvatarConfig] = useState({
    topType: 'ShortHairDreads01',
    accessoriesType: 'Round',
    hairColor: 'Black',
    facialHairType: 'Blank',
    facialHairColor: 'BlondeGolden',
    clotheColor: 'PastelBlue',
    eyeType: 'Happy',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light',
    clotheType: 'BlazerShirt',
    // graphicType: 'Diamond'
  });


  // Function to update avatar configuration
  const updateAvatar = (type, value) => {
    setAvatarConfig((prev) => ({
      ...prev,
      [type]: value,
    }));
    console.log(`Updated ${type}: ${value}`);
  };



  const randomizeAvatar = () => {
    const randomizedConfig = {};
    Object.keys(avatarOptions).forEach((key) => {
      const options = avatarOptions[key];
      const randomOption = options[Math.floor(Math.random() * options.length)];
      randomizedConfig[key] = randomOption;
    });
    setAvatarConfig(randomizedConfig);
  };



  return (
    <div className="avatar-editor">
      <h2>Customize Your Avatar</h2>
      <Piece style={{ width: '150px', height: '50px', }}    pieceType="skin" pieceSize="100" skinColor="Brown" />
      <button
        className="randomize-button"
        onClick={randomizeAvatar}
      >
        Randomize Avatar
      </button>
      {/* Main Avatar Preview */}
      <Avatar
        style={{ width: '150px', height: '150px', marginBottom: '20px' }}
        avatarStyle="Circle"
        {...avatarConfig}
      />

      {Object.keys(avatarOptions).map((pieceType) => (
        <div key={pieceType} className="option-section">
          <p>{pieceType}</p>
          <h4 className='text-2xl font-bold  bg-blue-400 p-2'>{pieceType.charAt(0).toUpperCase() + pieceType.slice(1)}</h4>
          <div className="flex gap-4 overflow-x-auto py-2">
            {avatarOptions[pieceType].map((option) => (
              <div key={option} className="option-preview">
                {/* Display the Piece Component for preview */}

                {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="skin" pieceSize="100" skinColor="Brown" /> */}

                {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/> */}
                <Piece style={{ width: '150px', height: '50px', }}   
                  pieceType={pieceType.replace(/(Type|Color)$/, '')} // Remove 'Type' suffix for Piece component ,,""i want to remove Color suffix 
                  pieceSize="100"
                  {...(pieceType.includes('Color' | 'Type')
                    ? { [pieceType]: option }
                    : { [`${pieceType}`]: option })}
                />
                <button
                  className="option-button"
                  onClick={() => updateAvatar(pieceType, option)}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
























  // return (
  //   <div className="flex items-center h-[90dvh] justify-center ">
  //   <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black/50   text-center">
  //   Setting
  //   </p>
  // </div>
  // )
}

export default TSetting