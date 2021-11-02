const Campfire = () => {
  return (
    <div className="campfire">
      <div className="fire">
        <div className="left">
          <div className="main_fire"></div>
          <div className="particle_fire"></div>
        </div>
        <div className="main">
          <div className="main_fire"></div>
          <div className="particle_fire"></div>
        </div>
        <div className="right">
          <div className="main_fire"></div>
          <div className="particle_fire"></div>
        </div>
        <div className="bottom">
          <div className="_main"></div>
        </div>
        <div className="glow" />
      </div>
      <div className="logs">
        <div className="log" />
        <div className="log" />
        <div className="log" />
        <div className="log" />
        <div className="log" />
        <div className="log" />
        <div className="log" />
      </div>
      <div className="rocks">
        <div className="rock_big_1" />
        <div className="rock_big_1_glow" />
        
        <div className="rock_big_2" />
        <div className="rock_big_2_glow" />

        <div className="rock_big_3" />
        <div className="rock_big_3_glow" />

        <div className="rock_big_4" />
        <div className="rock_big_4_glow" />

        <div className="rock_big_5" />
        <div className="rock_big_5_glow" />

      </div>
    </div>
  );
};

export default Campfire;
