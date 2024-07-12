import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
      <div className="card">
            <img src={image} alt={`${name}`} className="player-image" />
                  <div className="card-content">
                          <h2 className="player-name">{name}</h2>
                                  <p className="pnilayer-position">{position}</p>
                                          <div className="player-stats">
                                                    <p><strong>Points Per Game:</strong> {stats.pointsPerGame}</p>
                                                              <p><strong>Assists Per Game:</strong> {stats.assistsPerGame}</p>
                                                                        <p><strong>Rebounds Per Game:</strong> {stats.reboundsPerGame}</p>
                                                                                </div>
                                                                                      </div>
                                                                                          </div>
                                                                                            );
                                                                                            };

                                                                                            export default BasketballPlayerCae nd;