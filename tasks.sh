
# Down docker containers & delete networks
docker rm -f $(docker ps -aq) && yes | docker network prune

# Delete TFA_T_PROCESSOR docker containers
docker rmi allatrack/s_tfa_tp allatrack/sc_tfa_tp allatrack/tfa_cabinet

# Build SERVICE TFA_T_PROCESSOR
cd ~/workdirs/blockchain-2fa-backend/net/service_tfa_processor/
docker build -t allatrack/s_tfa_tp .

# Build SERVICE TFA_T_PROCESSOR
cd ~/workdirs/blockchain-2fa-backend/net/client_tfa_processor/
docker build -t allatrack/sc_tfa_tp .

# Build SERVICE TFA_CABINET
cd ~/workdirs/2fa-cabinet-git/
docker build -t allatrack/tfa_cabinet .

# Start network
cd ~/workdirs/blockchain-2fa-backend/
docker-compose -f net/network.yaml up