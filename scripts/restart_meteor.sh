pkill meteor

for i in 3 2 1;
do
  echo "Restarting in $i seconds"
  sleep $i
done

nohup meteor run --port 6000 & disown
sudo service haproxy restart
