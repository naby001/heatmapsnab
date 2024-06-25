                                      // script.js
                                      document.addEventListener('DOMContentLoaded', function () {
                                          const interactiveCells = document.querySelectorAll('#heatmap td');
                                          const staticCells = document.querySelectorAll('#static-heatmap td');
                                          const tooltip = document.getElementById('tooltip');
                                          const tooltipValue = document.getElementById('tooltip-value');
                                          const resetButton = document.getElementById('reset-button');

                                          function addTooltip(cell) {
                                              cell.addEventListener('mouseover', function (event) {
                                                  let currentValue = cell.getAttribute('data-value');
                                                  tooltipValue.textContent = currentValue;
                                                  tooltip.style.display = 'block';
                                                  tooltip.style.left = `${event.pageX + 5}px`;
                                                  tooltip.style.top = `${event.pageY + 5}px`;
                                              });

                                              cell.addEventListener('mousemove', function (event) {
                                                  tooltip.style.left = `${event.pageX + 5}px`;
                                                  tooltip.style.top = `${event.pageY + 5}px`;
                                              });

                                              cell.addEventListener('mouseout', function () {
                                                  tooltip.style.display = 'none';
                                              });
                                          }

                                          interactiveCells.forEach(cell => {
                                              cell.addEventListener('click', function () {
                                                  let currentValue = parseInt(cell.getAttribute('data-value'));
                                                  currentValue = (currentValue + 1) % 5; // Cycle through values 0 to 4
                                                  cell.setAttribute('data-value', currentValue);
                                                  cell.querySelector('span').textContent = currentValue;
                                              });
                                              addTooltip(cell);
                                          });

                                          staticCells.forEach(cell => {
                                              addTooltip(cell);
                                          });

                                          resetButton.addEventListener('click', function () {
                                              interactiveCells.forEach(cell => {
                                                  cell.setAttribute('data-value', 0);
                                                  cell.querySelector('span').textContent = 0;
                                              });
                                          });
                                      });
